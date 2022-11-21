import React from "react";
import "../App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import dummy from "../data.json";

function ImgNewInfo({ src, job, is, id }) {
  const [bookmarkIcon, setBookmarkIcon] = useState(false);

  const bookmarkstatus = useSelector(
    (state) => state.bookmarkReducer.bookmarkstate
  );
  const dispatch = useDispatch();
  const Bookmarking = (e) => {
    e.preventDefault();

    if (bookmarkIcon === false) {
      dispatch({ type: "Bookmarking", id });
      setBookmarkIcon(true);
    }
    if (bookmarkIcon) {
      setBookmarkIcon(false);
      dispatch({ type: "Bookmarking", id });
    }
  };
  const number = 1000000;
  const number2 = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <li className="img_news_info">
      <img src={src} />

      <i
        onClick={Bookmarking}
        className={
          bookmarkstatus.includes(id) === true
            ? "fa-solid fa-bookmark"
            : "fa-regular fa-bookmark"
        }
      ></i>
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
