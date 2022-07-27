from fastapi import Depends
from fastapi_pagination.ext.async_sqlalchemy import paginate
from fastapi_pagination.limit_offset import Params
from sqlalchemy import func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload

from database import WifiZone
from database.engine import get_async_session


class WifiZoneRepo:

    def __init__(self, session: AsyncSession = Depends(get_async_session)):
        self.session = session

    async def get_all_wifi_zones(self, limit: int, offset: int):
        return await paginate(
            self.session,
            select(WifiZone).options(selectinload(WifiZone.district)),
            params=Params(limit=limit, offset=offset),
        )

    async def get_nearest_wifi_zones(self, limit: int, offset: int,
                                     lat_x: float, lon_x: float, radius: float):
        f = func.calculate_distance(WifiZone.latitude, WifiZone.longitude,
                                    lat_x, lon_x)
        query = select(WifiZone, f.label('distance')).options(selectinload(WifiZone.district)).where(
            f < radius).order_by('distance')
        result = await paginate(
            self.session,
            query=query,
            params=Params(limit=limit, offset=offset),
        )
        return result