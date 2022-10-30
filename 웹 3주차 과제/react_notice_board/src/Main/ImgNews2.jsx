import React from "react";

const ImgNews2 = ({ src, title, article }) => {
  return (
    <div>
      <li>
        <div className="img_news">
          <div className="first_nomargin">
            <img src={src} />
            <p className="min_title1">{title}</p>
            <p className="min_main2">{article}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ImgNews2;
