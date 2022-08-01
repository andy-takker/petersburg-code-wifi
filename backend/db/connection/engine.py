from sqlalchemy import create_engine
from sqlalchemy.pool import QueuePool

from config import get_settings

settings = get_settings()

engine = create_engine(
    url=settings.CELERY_DBURI,
    pool_pre_ping=True,
    pool_size=20,
    max_overflow=0,
    poolclass=QueuePool,
)
