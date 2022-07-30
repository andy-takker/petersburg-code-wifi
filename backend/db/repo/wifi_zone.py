from fastapi import Depends
from fastapi_pagination.ext.sqlalchemy_future import paginate
from fastapi_pagination.limit_offset import Params
from sqlalchemy import func
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload, Session

from db import WifiZone
from db.connection.session import get_session


class WifiZoneRepo:

    def __init__(self, session: Session = Depends(get_session)):
        self.session = session

    def get_all_wifi_zones(self, limit: int, offset: int):
        return paginate(
            self.session,
            select(WifiZone).options(selectinload(WifiZone.district)),
            params=Params(limit=limit, offset=offset),
        )

    def get_nearest_wifi_zones(self, limit: int, offset: int, lat_x: float,
                               lon_x: float, radius: float):
        f = func.calculate_distance(WifiZone.latitude, WifiZone.longitude,
                                    lat_x, lon_x)
        query = select(WifiZone, f.label('distance')).options(
            selectinload(
                WifiZone.district)).where(f < radius).order_by('distance')
        result = paginate(
            self.session,
            query=query,
            params=Params(limit=limit, offset=offset),
        )
        return result
