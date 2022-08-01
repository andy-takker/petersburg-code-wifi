import React, { useState } from "react";

import {
  Button,
  Card,
  CardGrid,
  CardScroll,
  Group,
  Panel,
  PanelHeader,
  Title,
} from "@vkontakte/vkui";
import LogoImg from "../assets/logo.svg";
import { Icon28TargetOutline } from "@vkontakte/icons";

import bridge from "@vkontakte/vk-bridge";

import { appState } from "../state";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { getNearestWifi } from "../api/getNearestWifi";

import firstImg from "../assets/1.png";
import secondImg from "../assets/2.png";
import thirdImg from "../assets/3.png";
import fourImg from "../assets/4.png";

type Coordinate = {
  lat: number;
  lon: number;
};

function getDistanceBetweenTwoPoints(cord1: Coordinate, cord2: Coordinate) {
  if (cord1.lat == cord2.lat && cord1.lon == cord2.lon) {
    return 0;
  }

  const radlat1 = (Math.PI * cord1.lat) / 180;
  const radlat2 = (Math.PI * cord2.lat) / 180;

  const theta = cord1.lon - cord2.lon;
  const radtheta = (Math.PI * theta) / 180;

  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  if (dist > 1) {
    dist = 1;
  }

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344; //convert miles to km

  return dist;
}

const HomePanel = ({
  id,
  go,
  goPanel,
}: {
  id: string;
  go: (panel: string) => void;
  goPanel: (panel: string) => void;
}) => {
  const { t, i18n } = useTranslation();

  const [activeLang, setActiveLang] = useState<"ru" | "en" | string>(
    i18n.language
  );
  const [userGeo, setUserGeo] = useState<number[]>([]);
  const [userGeoLoading, setUserGeoLoading] = useState(false);
  const [distanceToNearest, setDistanceToNearest] = useState(0);

  const changeLanguage = (lang: "ru" | "en") => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
  };

  const getGeo = async () => {
    setUserGeoLoading(true);
    try {
      const geoData = await bridge.send("VKWebAppGetGeodata");

      if (!geoData.available) {
        return;
      }

      const { lat, long } = geoData;
      if (lat) {
        const nearestWifis = await getNearestWifi({
          limit: 1,
          latitude: lat,
          longitude: long,
          radius: 40000,
        });

        const distance = getDistanceBetweenTwoPoints(
          {
            lat: nearestWifis.items[0].latitude,
            lon: nearestWifis.items[0].longitude,
          },
          {
            lat,
            lon: long,
          }
        );
        setDistanceToNearest(distance);

        setUserGeo([lat, long]);

        if (distance < 3) {
          appState.lat = lat;
          appState.lng = long;
        }
      }
    } finally {
      setUserGeoLoading(false);
    }
  };
  return (
    <Panel id={id}>
      <PanelHeader>{t("title")}</PanelHeader>
      <Group>
        <div>
          <div className="flex justify-center my-2 mt-4">
            <img src={LogoImg} alt="" />
          </div>
          <p className="text-center text-[#97949B] text-14 mt-4 px-3 max-w-[285px] mx-auto">
            {t("welcome")}
          </p>
          <div className="px-3 flex justify-center space-x-2 mt-4">
            <button
              onClick={() => changeLanguage("ru")}
              className={classNames(
                "py-0.5 px-1.5 rounded-md",
                activeLang === "ru"
                  ? "bg-[#39A7CD] text-white"
                  : "text-[#D3D7DB] border border-[#D3D7DB]"
              )}
            >
              RUS
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={classNames(
                "py-0.5 px-1.5 rounded-md",
                activeLang === "en"
                  ? "bg-[#39A7CD] text-white"
                  : "text-[#D3D7DB] border border-[#D3D7DB]"
              )}
            >
              ENG
            </button>
          </div>
          <CardGrid size="l" className="mt-4">
            <Card mode="shadow">
              <div className="border border-[#5CC7EB] bg-[#5CC7EB]/10 p-4 flex items-center rounded-2xl text-[#5CC7EB]">
                <Icon28TargetOutline />
                <p className="ml-4 text-[#5CC7EB] text-xs font-bold">
                  {t("share")}
                </p>
              </div>
            </Card>
          </CardGrid>
          <div className="px-3">
            {!userGeo.length ? (
              <Button
                onClick={getGeo}
                stretched
                size="l"
                className="mt-4 !bg-[#5CC7EB] flex items-center"
                loading={userGeoLoading}
              >
                {t("share_loc")}
              </Button>
            ) : (
              <div className="text-center text-[#97949B] mt-3">
                <p>{t("coordinates")}</p>
                <div className="font-bold text-[#39A7CD]">
                  <span>
                    {userGeo[0]}, {userGeo[1]}
                  </span>
                </div>
                <p className="mt-2">{t("nearest")}</p>
                <div className="font-bold text-[#39A7CD]">
                  {distanceToNearest} km
                </div>
              </div>
            )}
          </div>
        </div>
      </Group>
      <Group>
        <div className="px-3">
          <Button
            stretched
            size="l"
            onClick={() => go("map")}
            className="!bg-[#5CC7EB]"
          >
            {t("go_map")}
          </Button>
        </div>
      </Group>
      <Title level="2" style={{ marginBottom: 16 }} className="px-3 mt-6">
        Полезные советы
      </Title>
      <CardScroll size="s">
        <Card>
          <div
            onClick={() => goPanel("security")}
            className="h-[173px] flex items-end p-4 relative"
          >
            <img
              src={firstImg}
              alt=""
              className=" object-cover w-full h-full absolute top-0 left-0 -z-10 rounded-md"
            />
            <p className="text-white">{t("security")}</p>
          </div>
        </Card>
        <Card>
          <div
            onClick={() => goPanel("fast")}
            className="h-[173px] flex items-end p-4 relative"
          >
            <img
              src={fourImg}
              alt=""
              className=" object-cover w-full h-full absolute top-0 left-0 -z-10 rounded-md"
            />
            <p className="text-white">{t("fast")}</p>
          </div>
        </Card>
        <Card>
          <div
            onClick={() => goPanel("metro")}
            className="h-[173px] flex items-end p-4 relative"
          >
            <img
              src={secondImg}
              alt=""
              className=" object-cover w-full h-full absolute top-0 left-0 -z-10 rounded-md"
            />
            <p className="text-white">{t("metro")}</p>
          </div>
        </Card>
        <Card>
          <div
            onClick={() => goPanel("smart")}
            className="h-[173px] flex items-end p-4 relative"
          >
            <img
              src={thirdImg}
              alt=""
              className=" object-cover w-full h-full absolute top-0 left-0 -z-10 rounded-md"
            />
            <p className="text-white">{t("smart")}</p>
          </div>
        </Card>
      </CardScroll>
    </Panel>
  );
};

export default HomePanel;
