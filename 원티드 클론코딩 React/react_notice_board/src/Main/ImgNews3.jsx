import React from "react";

const ImgNews3 = ({ src, title, article, from }) => {
  return (
    <div>
      <li>
        <div className="img_news">
          <div className="first_nomargin">
            <img src={src} />
            <p className="min_title1">{title}</p>
            <p className="min_main3">{article}</p>
            <div className="new_clean1">
              <p>{from}</p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ImgNews3;
