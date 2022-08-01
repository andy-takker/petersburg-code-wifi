from sqlalchemy import Column, String, Integer, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from db.base import Base
from db.mixins import TimestampMixin


class District(Base):
    name = Column(String(255), index=True, nullable=False)

    wifi_zones = relationship('WifiZone', back_populates='district')

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name


class WifiZone(TimestampMixin, Base):
    address = Column(String(1024), nullable=False)
    district_id = Column(ForeignKey('district.id'), index=True, nullable=True)
    name_wifi = Column(String(127), nullable=False)
    coverage = Column(Integer, nullable=False)
    is_working = Column(Boolean, default=True)
    longitude = Column(Float, nullable=False, index=True)
    latitude = Column(Float, nullable=False, index=True)

    district: District | None = relationship('District',
                                             back_populates='wifi_zones')
