import React from "react";
import "./News.css";

const NewsCard = ({ src, title, author, article }) => {
  return (
    <div className="NewsBoxRow">
      <div>
        <img className="NewsCardSize" src={src} />
      </div>
      <div className="row">
        <h5 className="titleWrap">{title}</h5>
        <h6>{author}</h6>
      </div>
    </div>
  );
};

export default NewsCard;
