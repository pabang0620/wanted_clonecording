import React from "react";
import ButtonMain from "./ButtonMain";
import ImgNews from "./ImgNews";
import ImgNews2 from "./ImgNews2";
import ImgNews3 from "./ImgNews3";
import FirstBigImg from "./FirstBigImg";
import dummy from "../data.json";

const MainBody = () => {
  return (
    <div>
      <section className="section1">
        <div className="first_image">
          <FirstBigImg tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1803%2F0907f393.jpg&w=1060&q=100" />
          <FirstBigImg tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1825%2Fb93ecf4e.jpg&w=1060&q=100" />
          <FirstBigImg tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1844%2F3d999be3.jpg&w=1060&q=100" />
          <FirstBigImg tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1853%2F2464b111.jpg&w=1060&q=100" />
          <FirstBigImg tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1852%2F41073f1a.jpg&w=1060&q=100" />
        </div>
      </section>
      <section className="section2">
        <div>
          <h2 className="title2">
            나에게 필요한 커리어 인사이트{" "}
            <i className="fa-regular fa-circle-question"></i>
          </h2>
        </div>
        <div className="button_1">
          {dummy.mainbutton.map((buttoninput) => (
            <ButtonMain key={buttoninput.id} tag={buttoninput.tag} />
          ))}
        </div>
        <div className="imgnew_justifycenter">
          <ul className="for_clean1">
            {dummy.ImgNewdata.map((newsdata) => (
              <ImgNews
                key={newsdata.id}
                src={newsdata.src}
                title={newsdata.title}
                article={newsdata.article}
                from={newsdata.from}
              />
            ))}
          </ul>
        </div>
      </section>
      <div className="for_center1">
        <button className="more_info">
          <span>더 많은 콘텐츠 보기</span>
        </button>
      </div>

      <div className="for_test_and_margin">
        <section className="section2">
          <div>
            <h2 className="title2">3분만에 읽는 Wanted+ 아티클</h2>
          </div>
          <div className="imgnew_justifycenter">
            <ul className="for_clean1">
              {dummy.secondimg.map((newsdataa) => (
                <ImgNews2
                  key={newsdataa.id}
                  src={newsdataa.src}
                  title={newsdataa.title}
                  article={newsdataa.article}
                />
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="for_test_and_margin">
        <section className="section2">
          <div>
            <h2 className="title2">직장인을 위한 Wanted+ VOD</h2>
          </div>
          <div className="imgnew_justifycenter">
            <ul className="for_clean1">
              {dummy.lastimg.map((newsdataaa) => (
                <ImgNews3
                  key={newsdataaa.id}
                  src={newsdataaa.src}
                  title={newsdataaa.title}
                  article={newsdataaa.article}
                  from={newsdataaa.from}
                />
              ))}
            </ul>
          </div>
        </section>
      </div>
      <section>
        <div className="mini_button">
          <button>
            <span>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀</span>
          </button>
        </div>
      </section>
      <div>
        <h2 className="title2">커리어 성장을 위한 맞춤 이벤트</h2>
      </div>
      <section className="middle_section">
        <section className="section2"></section>
        <div className="for_flex">
          <ul>
            <il className="img_size4">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2414%2F93dc7b57.jpg&w=1200&q=100" />
            </il>
            <il className="img_size4">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2406%2F6aae1a5c.jpg&w=1200&q=100" />
            </il>
          </ul>
          <div className="button_tag">
            <button>
              <span>온라인</span>
            </button>
            <button>
              <span>아티클</span>
            </button>
          </div>
        </div>
      </section>
      <section className="last_color">
        <div className="last">
          <div className="img_p">
            <img src="../image/wanted+.png" />
            <p>구독해야 하는 이유</p>
          </div>
          <div className="x14x">
            <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
          </div>
          <div>
            <button>첫 구독 0원 신청하기</button>
          </div>
        </div>
        <div className="last_img">
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90" />
        </div>
      </section>
      <section className="mini_img3">
        <div>
          <h2 className="title2">채용 정보를 찾고 계셨나요?</h2>
        </div>
        <section className="button_clean">
          <div className="button_12">
            <button>
              <img src="../image/first.png" />
            </button>
            <button>채용공고 </button>
          </div>
          <div className="button_12">
            <button>
              <img src="../image/second.png" />
            </button>
            <button>내 프로필 </button>
          </div>
          <div className="button_12">
            <button>
              <img src="../image/3rd.png" />
            </button>
            <button>매치업 </button>
          </div>
          <div className="button_12">
            <button>
              <img src="../image/4th.png" />
            </button>
            <button>직군별 연봉 </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainBody;
