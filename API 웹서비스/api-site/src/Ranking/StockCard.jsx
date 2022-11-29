import React from "react";
import { useState } from "react";

const StockCard = ({ itmsNm, mkp, basDt }) => {
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
      <div className="StockCard">
        <div className="StockInfo">
          <h5 className="StockName">{itmsNm}</h5>
          <h5>{basDt}</h5>
          <h6 className="StockPrice">
            <p onClick={showPriceAll} id="StockPrice1">
              종가 {number1}
            </p>
          </h6>
        </div>
      </div>
    </>
  );
};

export default StockCard;
