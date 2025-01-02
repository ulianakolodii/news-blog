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
      const news = await api.article("/v4/articles", "get", {
        query: { limit: limit },
      });
      setArticles(news);
    };
    fetchData();
  }, [limit]);

  const filteredData = useMemo(() => {
    if (!articles || !Array.isArray(articles.results))
      return { count: 0, next: "", previous: "", results: [] };

    if (!keywords.length)
      return {
        count: articles.results.length,
        next: "",
        previous: "",
        results: articles.results,
      };

    const byTitle = articles.results.reduce((acc, article) => {
      const title = article.title.toLowerCase();
      if (keywords.some((keyword) => title.includes(keyword.toLowerCase()))) {
        acc.set(article.id, article);
      }
      return acc;
    }, new Map());

    const bySummary = articles.results.reduce((acc, article) => {
      const description = article.summary?.toLowerCase() || "";
      if (
        keywords.some((keyword) => description.includes(keyword.toLowerCase()))
      ) {
        acc.set(article.id, article);
      }
      return acc;
    }, new Map());

    const mergedMap = new Map([...byTitle, ...bySummary]);

    return {
      count: mergedMap.size ?? 0,
      next: "",
      previous: "",
      results: Array.from(mergedMap.values()),
    };
  }, [articles, keywords]);

  return filteredData;
};
