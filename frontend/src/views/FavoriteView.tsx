import { View } from "@vkontakte/vkui";
import React, { useState } from "react";
import FavoritePanel from "../panels/FavoritePanel";
import MapPanel from "../panels/MapPanel";
import HomePanel from "../panels/MapPanel";

export const FavoriteView = ({ id }: { id: string }) => {
  const [activePanel, setActivePanel] = useState("favorite");

  return (
    <View activePanel={activePanel} id={id}>
      <FavoritePanel id="favorite" go={setActivePanel} />
    </View>
  );
};
