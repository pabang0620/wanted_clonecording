import React from "react";
import { useState } from "react";

const StockCard = ({ itmsNm, hipr, lopr, mkp, vs, trqu, basDt }) => {
  const [priceAll, setPriceAll] = useState(false);

  const showPriceAll = () => {
    setPriceAll(true);
    if (priceAll) {
      setPriceAll(false);
    }
  };

  // 000당 콤마
  const number1 = mkp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const number2 = hipr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const number3 = lopr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const number4 = vs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const number5 = trqu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div className="StockCard">
        <div className="StockInfo">
          <h5 className="StockName">{itmsNm}</h5>
          <h5>{basDt}</h5>
          <h6 className="StockPrice">
            <p onClick={showPriceAll} id="StockPrice1">
              종가 {number1}
            </p>
            {priceAll === true ? (
              <div className="StockPriceCenter">
                {" "}
                <p id="StockPrice2">
                  최고가<span>{number2}</span>
                </p>
                <p id="StockPrice3">
                  최저가<span>{number3}</span>
                </p>
                <p id="StockPrice4">
                  전날대비<span>{number4}</span>
                </p>
                <p id="StockPrice5">
                  총거래량<span>{number5}</span>
                </p>
              </div>
            ) : null}
          </h6>
        </div>
      </div>
    </>
  );
};

export default StockCard;
