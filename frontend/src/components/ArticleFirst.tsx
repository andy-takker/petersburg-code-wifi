import React from "react";
import { useTranslation } from "react-i18next";

const ArticleFirst = () => {
  const { t } = useTranslation();
  return <div dangerouslySetInnerHTML={{ __html: t("article_1") }}></div>;
};

export default ArticleFirst;
