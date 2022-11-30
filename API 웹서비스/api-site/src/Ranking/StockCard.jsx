import React from "react";
import { useState } from "react";
import ApexCharts from "react-apexcharts";

const StockCard = ({ itmsNm, mkp, basDt, stockdata, lopr, hipr }) => {
  const [priceAll, setPriceAll] = useState(false);

  const showPriceAll = () => {
    setPriceAll(true);
    if (priceAll) {
      setPriceAll(false);
    }
  };
  // 000당 콤마
  const number1 = mkp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div onClick={showPriceAll} className="StockInfo">
        <h5>{itmsNm}</h5>
        <p>종가 {number1}</p>
      </div>
      {priceAll === true && (
        <div>
          <ApexCharts
            type="line"
            series={[{ name: "주식 금액", data: [lopr, hipr, mkp] }]}
            options={{
              chart: {
                height: 300,
                width: 300,
              },
              xaxis: {
                categories: ["최저가", "최고가", "종가"],
              },
              // yaxis: {
              //   categories: [
              //     lopr - (lopr * 20) / 100,
              //     lopr - (lopr * 15) / 100,
              //     lopr - (lopr * 10) / 100,
              //     lopr - (lopr * 5) / 100,
              //   ],
              // },
            }}
          />
        </div>
      )}
    </>
  );
};

export default StockCard;
