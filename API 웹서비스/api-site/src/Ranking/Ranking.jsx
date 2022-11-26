import axios from "axios";
import { useState, useEffect } from "react";
import "./Ranking.css";

const Ranking = () => {
  const [rankingdata, setrankingdata] = useState({});
  const API_KEYID = "19nM5sB1J21v5O0EjLcy";
  const API_KEYPW = "46zcfaGNqV";

  const url = "https://openapi.naver.com/v1/datalab/search";

  const rankingdataAll = async () => {
    try {
      const weathersdata = await axios.get("/v1/datalab/search", {
        headers: {
          "X-Naver-Client-Id": "19nM5sB1J21v5O0EjLcy",
          "X-Naver-Client-Secret": "46zcfaGNqV",
        },
      });
      setrankingdata(weathersdata);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    rankingdataAll();
  }, []);
  return (
    <div>
      <div className="PopularityRanking">
        <div className="PopularityRankingBox">실시간 인기 검색어 순위</div>
        <div></div>
      </div>
    </div>
  );
};

export default Ranking;
