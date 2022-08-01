import React from "react";
import { useTranslation } from "react-i18next";

const ArticleFour = () => {
  const { t } = useTranslation();
  return <div dangerouslySetInnerHTML={{ __html: t("article_4") }}></div>;
};

export default ArticleFour;
