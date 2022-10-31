import React from "react";
import Button from "./Button.js";
import Big_img from "./big_img.jsx";
import Stack from "./stack.jsx";
import Kakaomap from "./Kakaomap.jsx";
import Long_article from "./long_article";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BigPha = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    slide: "img",
    arrows: true,
  };
  return (
    <section className="big_pha">
      <div className="big_pha_img_set">
        <Slider {...settings}>
          <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&w=1000&q=75" />
          <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75" />
          <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&w=1000&q=75" />
          <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75" />
        </Slider>
      </div>

      <div>
        <div className="big_pha_second">
          <h2 id="big_pha_title1">웹 프론트엔드 개발자(React)</h2>
          <div>
            <ul className="big_pha_second_mini">
              <li>블루비커</li>
              <li>
                <span>응답률 높음</span>
              </li>
              <li id="mini_mini_mini">
                <span>|</span>
              </li>
              <li id="mini_mini">
                <span>서울 &#183; 한국</span>
              </li>
            </ul>
          </div>
          <div className="big_pha_hashtag">
            <Button tag="#인원급성장" />
            <Button tag="#50명이하" />
            <Button tag="#설립3년이하" />
            <Button tag="#스톡옵션" />
            <Button tag="#스타트업" />
            <Button tag="#워크샵" />
            <Button tag="#간식" />
            <Button tag="#건강검진" />
            <Button tag="#IT, 컨텐츠" />
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <p />
      </div>
      <div>
        <Long_article />
      </div>

      <div>
        <h6>기술스택 &nbsp;&#183;&nbsp; 툴</h6>
      </div>
      <div className="big_pha_needed_skill">
        <Stack tag="git" />
        <Stack tag="Azure" />
        <Stack tag="React" />
        <Stack tag="JavaScript" />
        <Stack tag="TypeScript" />
        <Stack tag="Redux" />
        <Stack tag="Next.js" />
      </div>
      <section className="big_pha_address">
        <div>
          <span id="span_header">마감일</span>
          <span id="span_body">상시</span>
        </div>
        <div>
          <span id="span_header">근무지역</span>
          <span id="span_body">
            서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브
          </span>
        </div>
        <div>
          <Kakaomap />
        </div>
      </section>

      <div className="blue">
        <div className="blue_right">
          <div>
            <img src="image/blue.png" />
          </div>
          <div>
            <div className="blue_bic">
              <h5>블루비커</h5>
              <h6>IT,컨텐츠</h6>
            </div>
          </div>
        </div>
        <div>
          <button>
            <span>팔로우</span>
          </button>
        </div>
      </div>
      <div className="size_of_last">
        <div>
          <i className="fa-solid fa-exclamation"></i>
        </div>
        <div>
          <div className="readed_file">
            <p>
              본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
              없으며, 구독활동 이외의 용도로 사용할 수 없습니다
            </p>
            <button>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigPha;
