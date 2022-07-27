"""empty message

Revision ID: 4641b4f2126b
Revises: 
Create Date: 2022-07-27 12:48:04.451799

"""
from alembic import op
import sqlalchemy as sa
import datetime


# revision identifiers, used by Alembic.
revision = '4641b4f2126b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('district',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_district_id'), 'district', ['id'], unique=False)
    op.create_index(op.f('ix_district_name'), 'district', ['name'], unique=False)
    op.create_table('wifi_zone',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.Column('address', sa.String(length=1024), nullable=False),
    sa.Column('district_id', sa.BigInteger(), nullable=True),
    sa.Column('name_wifi', sa.String(length=127), nullable=False),
    sa.Column('coverage', sa.Integer(), nullable=False),
    sa.Column('is_working', sa.Boolean(), nullable=True),
    sa.Column('longitude', sa.Float(), nullable=False),
    sa.Column('latitude', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['district_id'], ['district.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_wifi_zone_district_id'), 'wifi_zone', ['district_id'], unique=False)
    op.create_index(op.f('ix_wifi_zone_id'), 'wifi_zone', ['id'], unique=False)
    op.create_index(op.f('ix_wifi_zone_latitude'), 'wifi_zone', ['latitude'], unique=False)
    op.create_index(op.f('ix_wifi_zone_longitude'), 'wifi_zone', ['longitude'], unique=False)
    op.create_table('celery_crontab_schedule',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('minute', sa.String(length=240), nullable=True),
    sa.Column('hour', sa.String(length=96), nullable=True),
    sa.Column('day_of_week', sa.String(length=64), nullable=True),
    sa.Column('day_of_month', sa.String(length=124), nullable=True),
    sa.Column('month_of_year', sa.String(length=64), nullable=True),
    sa.Column('timezone', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sqlite_autoincrement=True
    )
    op.create_table('celery_interval_schedule',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('every', sa.Integer(), nullable=False),
    sa.Column('period', sa.String(length=24), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sqlite_autoincrement=True
    )
    op.create_table('celery_periodic_task',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('task', sa.String(length=255), nullable=True),
    sa.Column('interval_id', sa.Integer(), nullable=True),
    sa.Column('crontab_id', sa.Integer(), nullable=True),
    sa.Column('solar_id', sa.Integer(), nullable=True),
    sa.Column('args', sa.Text(), nullable=True),
    sa.Column('kwargs', sa.Text(), nullable=True),
    sa.Column('queue', sa.String(length=255), nullable=True),
    sa.Column('exchange', sa.String(length=255), nullable=True),
    sa.Column('routing_key', sa.String(length=255), nullable=True),
    sa.Column('priority', sa.Integer(), nullable=True),
    sa.Column('expires', sa.DateTime(timezone=True), nullable=True),
    sa.Column('one_off', sa.Boolean(), nullable=True),
    sa.Column('start_time', sa.DateTime(timezone=True), nullable=True),
    sa.Column('enabled', sa.Boolean(), nullable=True),
    sa.Column('last_run_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('total_run_count', sa.Integer(), nullable=False),
    sa.Column('date_changed', sa.DateTime(timezone=True), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name'),
    sqlite_autoincrement=True
    )
    op.create_table('celery_periodic_task_changed',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('last_update', sa.DateTime(timezone=True), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('celery_solar_schedule',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('event', sa.String(length=24), nullable=True),
    sa.Column('latitude', sa.Float(), nullable=True),
    sa.Column('longitude', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sqlite_autoincrement=True
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('celery_solar_schedule')
    op.drop_table('celery_periodic_task_changed')
    op.drop_table('celery_periodic_task')
    op.drop_table('celery_interval_schedule')
    op.drop_table('celery_crontab_schedule')
    op.drop_index(op.f('ix_wifi_zone_longitude'), table_name='wifi_zone')
    op.drop_index(op.f('ix_wifi_zone_latitude'), table_name='wifi_zone')
    op.drop_index(op.f('ix_wifi_zone_id'), table_name='wifi_zone')
    op.drop_index(op.f('ix_wifi_zone_district_id'), table_name='wifi_zone')
    op.drop_table('wifi_zone')
    op.drop_index(op.f('ix_district_name'), table_name='district')
    op.drop_index(op.f('ix_district_id'), table_name='district')
    op.drop_table('district')
    # ### end Alembic commands ###
