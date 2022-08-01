import React from "react";
import { useTranslation } from "react-i18next";

const ArticleThird = () => {
  const { t } = useTranslation();
  return <div dangerouslySetInnerHTML={{ __html: t("article_3") }}></div>;
};

export default ArticleThird;
