from typing import Any

from fastapi import APIRouter, Depends
from fastapi_pagination import LimitOffsetPage

from api.schemas import OutputWifiZone
from db.repo.wifi_zone import WifiZoneRepo

wifi_router = APIRouter(prefix='/wifi-zones', tags=['Wi-Fi'])


@wifi_router.get('/',
                 response_model=LimitOffsetPage[OutputWifiZone],
                 name='Возвращает список всех wi-fi зон')
async def get_wifi_zones(limit: int, offset: int,
                         wifi_zone: WifiZoneRepo = Depends()) -> Any:
    return wifi_zone.get_all_wifi_zones(limit=limit, offset=offset)


@wifi_router.get('/nearest',
                 response_model=LimitOffsetPage[OutputWifiZone],
                 name='Возвращает ближайшие зоны по радиусу')
async def get_nearest_wifi_zones(limit: int, offset: int,
                                 latitude: float,
                                 longitude: float,
                                 radius: float = 2,
                                 wifi_zone: WifiZoneRepo = Depends()) -> Any:
    return wifi_zone.get_nearest_wifi_zones(limit=limit, offset=offset,
                                                  lat_x=latitude,
                                                  lon_x=longitude,
                                                  radius=radius)
