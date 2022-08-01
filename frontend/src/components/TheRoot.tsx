import { useState } from "react";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  Root,
  View,
  Panel,
} from "@vkontakte/vkui";
import { MainView } from "../views/MainView";
import { TheEpic } from "./TheEpic";

type AppViews = "onboarding" | "main" | "filter-modal";

const TheRoot = () => {
  const [activeView, setActiveView] = useState<AppViews>("main");

  return (
    <ConfigProvider appearance="light">
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <Root activeView={activeView}>
                <TheEpic id="main" />
              </Root>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default TheRoot;
