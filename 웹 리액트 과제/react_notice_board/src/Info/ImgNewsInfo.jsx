import React from "react";
import "../App.css";

function ImgNewInfo({ src, job, is }) {
  const number = 1000000;
  const number2 = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <li className="img_news_info">
      <img src={src} />
      <i className="fa-regular fa-bookmark"></i>
      <div className="img_news_padding">
        <div id="img_news_first">{job}</div>
        <div id="img_news_second">{is}</div>
        <div id="img_news_third">서울 &#183; 한국</div>
        <div id="img_news_4th">채용보상금 {number2}원</div>
      </div>
    </li>
  );
}

export default ImgNewInfo;
