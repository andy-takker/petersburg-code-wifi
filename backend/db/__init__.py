from db.base import Base
from db.models import *
from celery_sqlalchemy_scheduler.session import ModelBase

__all__ = ['ModelBase', 'Base', 'District', 'WifiZone']
