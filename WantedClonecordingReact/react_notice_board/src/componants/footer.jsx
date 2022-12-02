import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="last_div1">
        <ul className="last_list">
          <li>
            <img src={process.env.PUBLIC_URL + "/image/wanted.png"} />
          </li>
          <li>
            <a href="#">기업소개</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
        </ul>
        <ul className="sns_link">
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                id="minipic"
                src={process.env.PUBLIC_URL + "/image/naver_blog.png"}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                id="minipic"
                src={process.env.PUBLIC_URL + "/image/chat.png"}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                id="minipic"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-apple"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-google-play"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="last_div2">
        <p className="address">
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
          롯데월드타워 35층 | 통신판매번호 :
          2020-서울송파-3147유료직업소개사업등록번호 : (국내)
          제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 |
          사업자등록번호 : 299-86-00021 | 02-539-7118&#169;Wantedlab, inc.
        </p>
        <div>
          <img src={process.env.PUBLIC_URL + "/image/korea.png"} />
          <select className="lang_select">
            <option value="0">한국(한국어)</option>
            <option value="1">일본어</option>
            <option value="2">영어</option>
            <option value="3">중국어</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
