import React from "react";
import "../App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import dummy from "../data.json";

function ImgNewInfo({ src, job, is }) {
  const [bookmarkIcon, setBookmarkIcon] = useState(false);
  const Bookmarking = (e) => {
    e.preventDefault(); // 상위 이벤트 전파방지
    setBookmarkIcon(true);
    if (bookmarkIcon === true) {
      //// if 문 작성법이 잘못됐나? 왜 안되는지 모르겠다
      setBookmarkIcon(false); //// 그냥 리덕스로 하자
    }
    console.log(setBookmarkIcon);
  };

  // const bookmarkstatus = useSelector(                           /// 전체선택이 되버림
  //   (state) => state.bookmarkReducer.bookmarkstate
  // );
  // const dispatch = useDispatch();
  // const Bookmarking = () => {
  //   dispatch({ type: "Bookmarking" });
  //   if (bookmarkstatus) {
  //     dispatch({ type: "offBookmarking" });
  //   }
  // };
  const number = 1000000;
  const number2 = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <li className="img_news_info">
      <img src={src} />

      <i
        onClick={Bookmarking}
        className={
          bookmarkIcon === true
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
