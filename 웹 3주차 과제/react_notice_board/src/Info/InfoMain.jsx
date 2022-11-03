import React from "react";
import "./InfoMain.css";
import Buttonall from "./Buttonall";
import ImgAds from "./ImgAds";
import InfoImgNewsall from "./InfoImgNewsall";
import dummy from "../data.json";
import { useState, useEffect } from "react";

const InfoMain = () => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 299) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });
  // console.log(window.pageYOffset);
  return (
    <div>
      <div className="withNav">
        <section>
          <article className="header_article">
            <div>
              <button>
                <span>개발</span>
                <span>
                  <i className="fa-solid fa-circle-down"></i>
                </span>
              </button>
              <p> | </p>
              <button>
                <span>개발 전체</span>
                <span>
                  <i className="fa-solid fa-circle-down"></i>
                </span>
              </button>
            </div>
          </article>
          <div className={ScrollActive ? "fixedheader" : "justFixedheader"}>
            <section>
              <div className="Header_article_buttoncenter">
                <div className="header_article_buttonflex">
                  <div>
                    <button>
                      <span className="header_article_buttonflex_span">
                        지역
                      </span>
                      <span>
                        한국 <i className="fa-solid fa-circle-down"></i>
                      </span>
                    </button>
                    <button>
                      <span className="header_article_buttonflex_span">
                        경력
                      </span>
                      <span>
                        전체 <i className="fa-solid fa-circle-down"></i>
                      </span>
                    </button>
                    <button>
                      <span className="header_article_buttonflex_span">
                        기술스택 <i className="fa-solid fa-circle-down"></i>
                      </span>
                    </button>
                  </div>
                  <div>
                    <button>
                      <span>
                        응답률순 <i className="fa-solid fa-circle-down"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <Buttonall />
          </div>
        </section>
      </div>
      <div>
        <div className="TitleCenterall">
          <div className="TitleCentero">
            <button className="TitleCenter_button">북마크 모아보기</button>
          </div>
          <div className="TitleCentero">
            <h3 className="TitleCenter">적극 채용 중인 회사</h3>
          </div>
        </div>
        <div className="ImgAdsFlex">
          {dummy.headcompany.map((headcompanyinfo) => (
            <ImgAds
              key={headcompanyinfo.id}
              src={headcompanyinfo.src}
              logo={headcompanyinfo.logo}
              job={headcompanyinfo.job}
              is={headcompanyinfo.is}
            />
          ))}
        </div>
      </div>
      <InfoImgNewsall />
    </div>
  );
};

export default InfoMain;
