import { View } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import MapPanel from "../panels/MapPanel";

export const MapView = ({ id }: { id: string }) => {
  const [activePanel, setActivePanel] = useState("map");

  return (
    <View activePanel={activePanel} id={id}>
      <MapPanel id="map" go={setActivePanel} />
    </View>
  );
};
