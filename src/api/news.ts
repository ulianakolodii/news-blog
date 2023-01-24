export type NewsItemType = {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string,
    featured: boolean,
    launches: Array<string>,
    events: Array<string>
  };
  
  export const fetchNews = async () => {
    const res = await fetch(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );
    const news: Array<NewsItemType> | { error: string } = await res.json();
    return news;
  };