import axios from "axios";
import { useState, useEffect } from "react";
import "./Chart.css";

const Chart = () => {
  const [stockdata, setstockdata] = useState({});
  const API_KEY =
    "1HiE%2BL6AwxZjwHc1aVPJhQ%2B8wyhNESwyGp5vsbBK%2FsootMiyox%2BCKnjQ8Re%2FoNQPef0QAdWKgI6LWQxmfEOtLQ%3D%3D";

  const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${API_KEY}&numOfRows=10&resultType=json`;

  const stockDataAll = async () => {
    try {
      const stockdata = await axios({
        method: "get",
        url: url,
      });
      setstockdata(stockdata);
      console.log(stockdata);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    stockDataAll();
  }, []);

  return (
    <div className="col-lg-6">
      <div className="StockChart">주식 차트 API </div>
    </div>
  );
};

export default Chart;
