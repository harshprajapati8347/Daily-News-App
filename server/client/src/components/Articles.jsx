import { useState, useEffect } from "react";
import getNews from "../services/api";
import Article from "./Article";
import InfiniteScroll from "react-infinite-scroll-component";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  const dailyNews = async () => {
    let response = await getNews(page);
    setNews([...news, ...response.data]);
    // [{},{}]  ,  [{},{},{}] Both Different Arrays & we combine & spread operator will remove array and add all objects
    // [{},{}] , {} {}] so objects will added to this array of objects
  };
  useEffect(() => {
    dailyNews();
  }, [page]);
  return (
    <>
      <InfiniteScroll
        dataLength={news.length}
        next={() => setPage((page) => page + 1)}
        hasMore={true}
      >
        {news?.length > 0 &&
          news.map((article) => <Article article={article} />)}
      </InfiniteScroll>
    </>
  );
};

export default Articles;
