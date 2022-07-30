from contextlib import contextmanager
from typing import Generator, AsyncGenerator

from fastapi import HTTPException
from loguru import logger
from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import scoped_session, sessionmaker, Session

from config import get_settings
from db.connection.engine import engine, async_engine


# @contextmanager
# def get_session() -> Generator:
#     connection = engine.connect()
#     session = scoped_session(sessionmaker(
#         autocommit=False,
#         autoflush=True,
#         bind=engine,
#     ))
#     yield session
#     session.close()
#     connection.close()


async def get_async_session() -> AsyncGenerator:
    async_session = sessionmaker(
        async_engine, class_=AsyncSession, expire_on_commit=False,
    )
    async with async_session() as session:
        try:
            yield session
            await session.commit()
        except (SQLAlchemyError, HTTPException) as exc:
            await session.rollback()
            logger.exception("Error execute!")
            raise exc
        finally:
            await session.close()


class SessionManager:
    def __init__(self) -> None:
        self.engine = create_engine(
            get_settings().CELERY_DBURI,
            pool_pre_ping=True,
        )
        self.session_local = sessionmaker(
            autocommit=False,
            autoflush=False,
            bind=self.engine,
        )

    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, "instance"):
            cls.instance = super(SessionManager, cls).__new__(cls)
        return cls.instance

    def get_session(self) -> Session:
        return self.session_local()


def get_session() -> Session:
    session = SessionManager().get_session()
    try:
        yield session
    finally:
        session.close()
