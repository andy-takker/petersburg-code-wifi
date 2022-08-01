import React from "react";
import { useTranslation } from "react-i18next";

const ArticleSecond = () => {
  const { t } = useTranslation();
  return <div dangerouslySetInnerHTML={{ __html: t("article_2") }}></div>;
};

export default ArticleSecond;
