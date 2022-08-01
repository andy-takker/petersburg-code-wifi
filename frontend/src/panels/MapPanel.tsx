import React from "react";
import PropTypes from "prop-types";

import {
  Avatar,
  Button,
  Card,
  CardGrid,
  Group,
  HorizontalCell,
  HorizontalScroll,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  SizeType,
  SplitCol,
  SplitLayout,
  Title,
} from "@vkontakte/vkui";
import rocketIcon from "../assets/icons/rocket.png";
import cupIcon from "../assets/icons/cup.png";
import starsIcon from "../assets/icons/stars.png";
import plusIcon from "../assets/icons/plus.png";
import WifiMap from "../components/WifiMap";
import { useTranslation } from "react-i18next";

const MapPanel = ({ id, go }: { id: string; go: (panel: string) => void }) => {
  const { t } = useTranslation();

  return (
    <Panel id={id}>
      <PanelHeader>{t("title")}</PanelHeader>
      <div
        className="w-full"
        style={{
          height:
            "calc(100vh - var(--panelheader_height) - var(--tabbar_height))",
        }}
      >
        <WifiMap />
      </div>
    </Panel>
  );
};

export default MapPanel;
