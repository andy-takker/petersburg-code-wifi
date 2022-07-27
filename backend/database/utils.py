from celery_sqlalchemy_scheduler import PeriodicTask, IntervalSchedule
from loguru import logger

from database.engine import get_session


def create_parse_task():
    with get_session() as session:
        periodic_task = session.query(PeriodicTask).filter_by(
            task='update_database').first()
        if periodic_task is None:
            logger.info('Task not found. Creating...')
            periodic_task = PeriodicTask()
        periodic_task.task = 'update_database'
        periodic_task.name = 'Обновление БД'
        periodic_task.total_run_count = 0
        periodic_task.interval = IntervalSchedule(every=12, period='hours')
        periodic_task.enabled = True
        session.add(periodic_task)
        session.commit()
        logger.info('Task updated!')
