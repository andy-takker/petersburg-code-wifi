import typer
from sqlalchemy import func

from controllers.digital_spb import DigitalSpbAPI
from database import WifiZone
from database.engine import get_session

app = typer.Typer()

@app.command(name='download-wifi-zones')
def download_wifi_zones():
    digital_spb_api = DigitalSpbAPI()
    digital_spb_api.download()
    digital_spb_api.save()


@app.command(name='test')
def test():
    lat_x = 59.743675
    lon_x = 30.585087
    radius = 5
    with get_session() as session:
        a = session.query(WifiZone,func.calculate_distance(WifiZone.latitude, WifiZone.longitude, lat_x, lon_x).label('label')).where(func.calculate_distance(WifiZone.latitude, WifiZone.longitude, lat_x, lon_x) < radius).order_by(func.calculate_distance(WifiZone.latitude, WifiZone.longitude, lat_x, lon_x)).all()
        print(a)

if __name__ == '__main__':
    app()