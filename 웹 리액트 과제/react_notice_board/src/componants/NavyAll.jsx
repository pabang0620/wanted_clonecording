import "../App.css";
import React from "react";
import Nav from "../page/nav";
import Modalon from "../page/Modalon.jsx";
import { Link, useNavigate } from "react-router-dom";
import Searchcom from "./Searchcom";
import { useSelector } from "react-redux";

const NavyAll = () => {
  const test2 = useSelector((state) => state.naviLoginstatus);
  const test = () => {
    console.log(test2);
  };
  const navigate = useNavigate();

  const gotoPage = () => {
    alert("채용 상세페이지로 이동");
    navigate("/page/:id");
  };
  const gotoBookmark = () => {
    navigate("/profile/bookmarks");
  };
  return (
    <div>
      <section>
        <div className="nav_size">
          <nav className="navbar">
            <div className="main">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" />
              <Link to="/">
                <img src="image/wantedd.png" />
              </Link>
            </div>

            <div className="nav_menu">
              <div onClick={gotoPage}>
                <Nav tag="채용" />
              </div>
              <Nav tag="이벤트" />
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
              <ul>
                <Modalon />
                <li onClick={test} id="nothing">
                  |
                </li>
                <li id="service">
                  <button onClick={gotoBookmark}>기업 서비스</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default NavyAll;
