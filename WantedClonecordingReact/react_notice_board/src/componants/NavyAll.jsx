import "../App.css";
import React from "react";
import Nav from "../page/nav";
import Modalon from "../page/Modalon.jsx";
import Modalon2 from "../page/Modalon2.jsx";
import { Link, useNavigate } from "react-router-dom";
import Searchcom from "./Searchcom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navybar = () => {
  const LoginStatus = useSelector((state) => state.reducer.naviLoginstatus);
  const navigate = useNavigate();
  const gotopage = () => {
    alert("채용 상세페이지로 이동");
    navigate("/page/0");
  };
  return (
    <div>
      <section>
        <div className="nav_size">
          <nav className="navbar">
            <div className="main">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" />
              <Link to="/">
                <img src={process.env.PUBLIC_URL + "/image/wantedd.png"} />
              </Link>
            </div>

            <div className="nav_menu">
              <div onClick={gotopage}>
                <li>
                  <a className="displayblock">채용</a>
                </li>
              </div>

              <li>
                <a className="displayblock">이벤트</a>
              </li>

              <Link to="/info">
                <Nav tag="직군별 연봉" />
              </Link>
              <Nav tag="이력서" />
              <Nav tag="커뮤니티" />
              <Nav tag="프리랜서" />
              <Nav tag="AI 합격예측" />
            </div>

            <div className="nav_service">
              <Searchcom />
              <ul className="nav_service_nothing">
                {LoginStatus === true ? <Modalon2 /> : <Modalon />}

                <li id="nothing">|</li>
                <li id="service">
                  <button>기업 서비스</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navybar;
