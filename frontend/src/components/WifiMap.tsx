import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
// @ts-expect-error
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import { getNearestWifi } from "../api/getNearestWifi";
import { useSnapshot } from "valtio";
import { appState } from "../state";

// @ts-expect-error
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../assets/wifi.png"),
  iconUrl: require("../assets/wifi.png"),
  shadowUrl: "",
  iconSize: [24, 24],
});

const createClusterCustomIcon = function (cluster: any) {
  const count = cluster.getChildCount();
  let colorClass = "";
  if (count <= 10) {
    colorClass = "bg-[#39A7CD]/70 text-white";
  } else if (count <= 50) {
    colorClass = "bg-[#6cefd6]/70 text-white";
  } else colorClass = "bg-[#5CC7EB]/70 text-white";
  return L.divIcon({
    html: `<div><span>${count}</span></div>`,
    className: `leaflet-marker-icon marker-cluster ${colorClass} leaflet-zoom-animated leaflet-interactive`,
    iconSize: L.point(40, 40, true),
  });
};

const PanComponent = ({
  setWifiPoints,
}: {
  setWifiPoints: (center: any) => void;
}) => {
  const map = useMap();
  useMapEvents({
    moveend: () => {
      setWifiPoints(map.getCenter());
    },
  });

  return null;
};

const WifiMap = () => {
  const [wifiPoints, setWifiPoints] = useState<any>([]);
  const appStateSnap = useSnapshot(appState);

  const setWifiPointsFun = async (center: any) => {
    const nearWifi = await getNearestWifi({
      latitude: center.lat,
      longitude: center.lng,
      radius: 2,
    });
    console.log("fun");
    setWifiPoints(nearWifi.items);
  };

  useEffect(() => {
    const getAsyncNearestWifis = async () => {
      const nearWifi = await getNearestWifi({
        latitude: appStateSnap.lat,
        longitude: appStateSnap.lng,
        radius: 2,
      });
      setWifiPoints(nearWifi.items);
    };
    getAsyncNearestWifis();
  }, []);

  return (
    <MapContainer
      center={[appStateSnap.lat, appStateSnap.lng]}
      zoom={14}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" />
      <PanComponent setWifiPoints={setWifiPointsFun} />
      <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        {wifiPoints.map((v: any) => (
          <Marker
            key={v.address + v.latitude}
            position={[v.latitude, v.longitude]}
          >
            <Popup>
              {v.address} <br /> {v.name_wifi}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default WifiMap;
