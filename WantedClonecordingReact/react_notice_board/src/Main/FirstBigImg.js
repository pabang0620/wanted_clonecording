import React from "react";

const FirstBigImg = ({ tag, title, article }) => {
  return (
    <li className="img_margin" href="#">
      <img src={tag} />
      <div className="mainImg_box">
        <div className="mainImg_boxTitle">{title}</div>
        <div className="mainImg_boxArticle">{article}</div>
        <div>
          <button className="mainImg_boxButton">바로가기</button>
        </div>
      </div>
    </li>
  );
};

export default FirstBigImg;
