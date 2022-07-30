from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.pool import QueuePool

from config import get_settings

settings = get_settings()

async_engine = create_async_engine(
    url=settings.SQLALCHEMY_DATABASE_URI,
    pool_size=20,
    max_overflow=0,
    poolclass=QueuePool,
)

engine = create_engine(url=settings.CELERY_DBURI, pool_pre_ping=True)
