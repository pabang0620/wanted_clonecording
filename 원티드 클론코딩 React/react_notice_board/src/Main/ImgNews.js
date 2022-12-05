import React from "react";

const ImgNews = ({ src, title, article, from }) => {
  return (
    <div>
      <li>
        <div className="img_news">
          <div className="first_nomargin">
            <img src={src} />
            <p className="min_title1">{title}</p>
            <p className="min_main1">{article}</p>
            <div className="new_clean1">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75" />
              <p>{from}</p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ImgNews;
