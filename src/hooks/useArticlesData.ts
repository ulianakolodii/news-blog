import { useState, useEffect, useMemo } from "react";
import { api, Articles } from "../api";

export const useArticlesData = ({
  limit,
  keywords,
}: {
  limit: number;
  keywords: Array<string>;
}) => {
  const [articles, setArticles] = useState<Articles>();

  useEffect(() => {
    const fetchData = async () => {
      const news = await api.article("/v3/articles", "get", {
        query: { _limit: limit },
      });
      setArticles(news);
    };
    fetchData();
  }, [limit]);

  const filteredData = useMemo(() => {
    if (!articles) return;
    if (!keywords.length) return articles;

    const byTitle = articles.reduce((acc, article) => {
      const title = article.title.toLowerCase();
      if (keywords.some((keyword) => ` ${title} `.includes(` ${keyword} `))) {
        acc.set(article.id, article);
      }
      return acc;
    }, new Map());

    const bySummary = articles.reduce((acc, article) => {
      const description = article.summary?.toLowerCase() || "";
      if (
        keywords.some((keyword) => ` ${description} `.includes(` ${keyword} `))
      ) {
        acc.set(article.id, article);
      }
      return acc;
    }, new Map());

    const mergedMap = new Map([...byTitle, ...bySummary]);

    return Array.from(mergedMap.values());
  }, [articles, keywords]);

  return filteredData;
};
