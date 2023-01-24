import React, { useEffect, useState } from 'react'
import { fetchNews, NewsItems } from "../api/news";
import NewsCard from "./NewsCard";


export default function NewsList() {
    const [data, setData] = useState<NewsItems>();
    useEffect(() => {
        const loadNews = async () => {
            const news = await fetchNews();
            setData(news);
        }
        loadNews();
    }, [])
  return (
    <div>
      {data && data.map((newsItem) => (
        <NewsCard key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
}

