import { fetchNews } from "../api/news";
import NewsItem from "./NewsItem";
// import { NewsItemType } from "../api/news";

export default async function NewsList() {
  const news = await fetchNews();
  console.log(news);
  return (
    <div>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
}

// return <> {
//     news && news.map((newsItem) => <NewsItem key={newsItem.id} {...newsItem} />)
//     }</>
