import { View } from "@vkontakte/vkui";
import React, { useState } from "react";
import ArticlePanel from "../panels/ArticlePanel";
import HomePanel from "../panels/HomePanel";

export const MainView = ({
  id,
  goView,
}: {
  id: string;
  goView: (view: string) => void;
}) => {
  const [activePanel, setActivePanel] = useState("main");

  return (
    <View activePanel={activePanel} id={id}>
      <HomePanel id="main" go={goView} goPanel={setActivePanel} />
      <ArticlePanel id="security" onBackClick={() => setActivePanel("main")} />
      <ArticlePanel id="fast" onBackClick={() => setActivePanel("main")} />
      <ArticlePanel id="metro" onBackClick={() => setActivePanel("main")} />
      <ArticlePanel id="smart" onBackClick={() => setActivePanel("main")} />
    </View>
  );
};
