import React from "react";
import "../App.css";
import Img_news from "./img_news";

const ImgNewsAll = () => {
  return (
    <div>
      <ul className="img_new_flex">
        <Img_news tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F29774%2Fek5cikrrveydsggi__1080_790.jpg&w=1000&q=75" />
        <Img_news tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F27748%2Fxezbeln8xgp0bjyi__1080_790.jpg&w=1000&q=75" />
        <Img_news tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F13107%2Fqdyxwskfr1awfr1u__400_400.jpg&w=400&q=75" />
        <Img_news tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F36849%2Fksgnccqbn8f0sukq__400_400.jpg&w=400&q=75" />
      </ul>
    </div>
  );
};

export default ImgNewsAll;
