import React from "react";
import "../App.css";
import NavyAll from "../componants/NavyAll";
import BigPha from "./BigPha";
import InfoImgNewsall from "../Info/InfoImgNewsall";

const Main = () => {
  return (
    <div>
      <NavyAll />
      <section className="for_sticy">
        <BigPha />
        <section className="position_sticky">
          <section className="move_box">
            <div>
              <div className="move_box_first">
                <p>채용보상금</p>
                <button>
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
              <div className="move_box_val">
                <ul>
                  <li>
                    <h4>추천인</h4>
                    <p>500,000원</p>
                  </li>
                  <li>
                    <h4>지원자</h4>
                    <p>500,000원</p>
                  </li>
                </ul>
              </div>
              <div className="move_box_btst">
                <button id="bt1">
                  <img src={process.env.PUBLIC_URL + "/image/bookmark.png"} />
                  <span>북마크하기</span>
                </button>
                <button id="bt2">
                  <span>지원하기</span>
                </button>
              </div>
              <div className="move_box_snslog">
                <button>
                  <i className="fa-regular fa-heart"></i> <span> 9</span>
                </button>
                <img
                  alt=""
                  src={process.env.PUBLIC_URL + "/image/likes_info.png"}
                />
              </div>
            </div>
          </section>
        </section>
      </section>
      <h5 className="find_this_position">이 포지션을 찾고 계셨나요?</h5>
      <section className="center_for_imgnews">
        {/* <div className="find_this_position"> */}

        <InfoImgNewsall />
        {/* </div> */}
      </section>
    </div>
  );
};

export default Main;
