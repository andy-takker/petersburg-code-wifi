import typer

from controllers.digital_spb import DigitalSpbAPI
from database.utils import create_parse_task

app = typer.Typer()


@app.command(name='download-wifi-zones')
def download_wifi_zones():
    digital_spb_api = DigitalSpbAPI()
    digital_spb_api.download()
    digital_spb_api.save()


@app.command(name='create-interval-task')
def create_interval_task_for_update_data():
    create_parse_task()


if __name__ == '__main__':
    app()
