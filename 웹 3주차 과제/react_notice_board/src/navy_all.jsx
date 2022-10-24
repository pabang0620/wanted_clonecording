import "./App.css";
import React from "react";
import Nav from "./nav.jsx";
import Modalon from "./modalon.jsx";

const Navy_all = () => {
  return (
    <div>
      <section>
        <div className="nav_size">
          <nav className="navbar">
            <div className="main">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" />
              <a href="#">
                <img src="image/wantedd.png" />
              </a>
            </div>

            <div className="nav_menu">
              <Nav tag="채용" />
              <Nav tag="이벤트" />
              <Nav tag="직군별 연봉" />
              <Nav tag="이력서" />
              <Nav tag="커뮤니티" />
              <Nav tag="프리랜서" />
              <Nav tag="AI 합격예측" />
            </div>
            <div className="nav_service">
              <ul>
                <button>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <Modalon />
                <li id="nothing">|</li>
                <li id="service">
                  <a href="#">기업 서비스</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navy_all;
