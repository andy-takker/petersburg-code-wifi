import requests
from loguru import logger
from pydantic import parse_obj_as

from api.schemas import WifiZoneInput
from config import get_settings
from db import District, WifiZone
from db.connection.session import SessionManager

from celery_worker.celery_conf import celery as celery_app


class DigitalSpbAPI:
    BASE_URL = 'https://spb-classif.gate.petersburg.ru/api/v2'
    WIFI_ZONE_URL = f'{BASE_URL}/datasets/195/versions/latest/data/417'

    def __init__(self):
        settings = get_settings()
        self.session_manager = SessionManager()
        self.TOKEN = settings.DIGITAL_SPB_TOKEN
        self.wifi_zones: list[WifiZoneInput] = []
        self.districts = set()

    def _get(self, url: str) -> dict:
        return requests.get(
            url=url,
            headers={
                'Authorization': f'Bearer {self.TOKEN}'
            },
        ).json()

    def download(self):
        wifi_zones = []
        url = self.WIFI_ZONE_URL + '?page=1&per_page=100'
        while True:
            result = self._get(url)
            wifi_zones.extend(result['results'])
            if result['next'] is not None:
                url = result['next']
            else:
                break

        self.wifi_zones = parse_obj_as(list[WifiZoneInput], wifi_zones)
        logger.info(f'Downloaded {len(self.wifi_zones)} wifi zones')
        for wifi_zone in self.wifi_zones:
            self.districts.add(wifi_zone.district)
        self.districts.remove(None)
        logger.info(f'Districts {self.districts}')

    def save(self):
        session = self.session_manager.get_session()
        for district in self.districts:
            d = session.query(District).filter_by(name=district).first()
            if d is None:
                session.add(District(name=district))
        session.commit()

        for wifi_zone in self.wifi_zones:
            wz = session.get(WifiZone, wifi_zone.id)
            if wz is None:
                wz = WifiZone()
            wz.update_from_dict(**wifi_zone.dict(
                exclude={'district', 'status', 'coordinates'}))
            wz.district = session.query(District).filter_by(
                name=wifi_zone.district).first()
            session.add(wz)
        session.commit()
        session.close()


@celery_app.task(bind=True, name='update_database', track_started=True)
def download_wifi_zones(self):
    digital_spb_api = DigitalSpbAPI()
    digital_spb_api.download()
    digital_spb_api.save()
