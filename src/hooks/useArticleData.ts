import { useState, useEffect } from "react";
import { api, Article } from "../api";

export const useArticleData = ({ id }: { id: string }) => {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const fetchData = async () => {
      const article = await api.article("/v3/articles/{id}", "get", {
        path: { id },
      });
      setArticle(article);
    };
    fetchData();
  }, [id]);

  return article;
};
