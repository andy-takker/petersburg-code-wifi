from typing import Optional

from pydantic import Field, validator, BaseModel


class WifiZoneInput(BaseModel):
    id: int = Field(alias='number')
    address: str
    district: Optional[str]
    name_wifi: str
    coverage: int
    status: str
    coordinates: list[float]
    longitude: Optional[float]
    latitude: Optional[float]
    is_working: Optional[bool]

    @validator('latitude', always=True)
    def validate_latitude(cls, value, values):
        return values['coordinates'][0]

    @validator('longitude', always=True)
    def validate_longitude(cls, value, values):
        return values['coordinates'][1]

    @validator('is_working', always=True)
    def validate_is_working(cls, value, values):
        if values['status'].lower() == 'работает':
            return True
        return False

    class Config:
        orm_mode = True


class DistrictSchema(BaseModel):
    name: str

    class Config:
        orm_mode = True


class OutputWifiZone(BaseModel):
    id: int
    address: str
    district: Optional[DistrictSchema]
    name_wifi: str
    coverage: int
    is_working: bool
    latitude: float
    longitude: float

    class Config:
        orm_mode = True


class Coordinates(BaseModel):
    latitude: float
    longitude: float
