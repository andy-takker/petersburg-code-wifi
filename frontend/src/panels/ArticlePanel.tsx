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
import { useTranslation } from "react-i18next";
import ArticleFirst from "../components/ArticleFirst";
import ArticleSecond from "../components/ArticleSecond";
import ArticleThird from "../components/ArticleThird";
import ArticleFour from "../components/ArticleFour";

import imgFirst from "../assets/1_big.png";
import imgSecond from "../assets/2_big.png";
import imgThird from "../assets/3_big.png";
import imgFourth from "../assets/4_big.png";

const ArticlePanel = ({
  id,
  onBackClick,
}: {
  id: string;
  onBackClick: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={onBackClick} />}>
        {t("article")}
      </PanelHeader>
      <div className="mt-4 px-3">
        <img
          src={
            id === "security"
              ? imgFirst
              : id === "metro"
              ? imgSecond
              : id === "fast"
              ? imgThird
              : imgFourth
          }
          className="rounded-md mb-4"
        />
        {id === "security" ? (
          <ArticleFirst />
        ) : id === "metro" ? (
          <ArticleSecond />
        ) : id === "fast" ? (
          <ArticleThird />
        ) : (
          <ArticleFour />
        )}
      </div>
    </Panel>
  );
};

export default ArticlePanel;
