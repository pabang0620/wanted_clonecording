import axios from "axios";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [technologyNewsdata, settechnologyNewsdata] = useState({});
  const API_KEY = "2ae7ce13f8f0450285b2066cfa40f2ad";

  const url = `https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=${API_KEY}`;

  const technologyNews = async () => {
    try {
      const newsdata = await axios({
        method: "get",
        url: url,
      });
      settechnologyNewsdata(newsdata);
      console.log(newsdata);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    technologyNews();
  }, []);
  return (
    <>
      <div className="col-lg-4">
        <div className="NewsBoxRow">
          <div className="NewsBox">
            {Object.keys(technologyNewsdata).length !== 0 && (
              <div className="NewsCardMain">
                {technologyNewsdata.data.articles.map((newsAll) => (
                  <NewsCard
                    src={newsAll.urlToImage}
                    title={newsAll.title}
                    author={newsAll.author}
                    NewsCard={NewsCard}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </>
  );
};

export default News;
