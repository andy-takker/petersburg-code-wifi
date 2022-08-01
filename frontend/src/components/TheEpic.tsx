import {
  Icon28ClipOutline,
  Icon28FavoriteOutline,
  Icon28LocationMapOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
} from "@vkontakte/icons";
import {
  Badge,
  Counter,
  Epic,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Tabbar,
  TabbarItem,
  View,
} from "@vkontakte/vkui";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FavoriteView } from "../views/FavoriteView";
import { MainView } from "../views/MainView";
import { MapView } from "../views/MapView";

export const TheEpic = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  const [activeStory, setActiveStory] = useState("main");

  const onStoryChange = (e: any) =>
    setActiveStory(e.currentTarget.dataset.story);

  return (
    <Epic
      id={id}
      activeStory={activeStory}
      tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === "main"}
            data-story="main"
            text={t("main_tab")}
          >
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === "map"}
            data-story="map"
            text={t("map_tab")}
          >
            <Icon28LocationMapOutline />
          </TabbarItem>
          {/* <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === "favorite"}
            data-story="favorite"
            text="Избранное"
          >
            <Icon28FavoriteOutline />
          </TabbarItem> */}
        </Tabbar>
      }
    >
      <MainView id="main" goView={setActiveStory} />
      <MapView id="map" />
      {/* <FavoriteView id="favorite" /> */}
    </Epic>
  );
};
