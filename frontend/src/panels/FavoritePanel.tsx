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

const FavoritePanel = ({
  id,
  go,
}: {
  id: string;
  go: (panel: string) => void;
}) => (
  <Panel id={id}>
    <PanelHeader>Вайфай и точка - Питер</PanelHeader>
    <div className="w-full">Favorite panel</div>
  </Panel>
);

export default FavoritePanel;
