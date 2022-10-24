import "./App.css";
import React from "react";
import Button from "./Button.js";
import Big_img from "./big_img.jsx";
import Stack from "./stack.jsx";
import Navy_all from "./navy_all";
import Long_article from "./long_article";
import Img_news_all from "./Img_news_all";

function App() {
  return (
    <body>
      <Navy_all />
      <section ion className="for_sticy">
        <section className="big_pha">
          <div className="big_pha_img_set">
            <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&w=1000&q=75" />
            <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75" />
            <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&w=1000&q=75" />
            <Big_img tag="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75" />
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
              <img src="image/maps.png" />
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
                  본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할
                  수 없으며, 구독활동 이외의 용도로 사용할 수 없습니다
                </p>
                <button>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

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
                  <img src="image/bookmark.png" />
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
                <img src="image/likes_info.png" />
              </div>
            </div>
          </section>
        </section>
      </section>

      <section className="center_for_imgnews">
        <div className="find_this_position">
          <h5>이 포지션을 찾고 계셨나요?</h5>
          <Img_news_all />
          <Img_news_all />
          <Img_news_all />
          <Img_news_all />
        </div>
      </section>

      <footer>
        <div className="last_div1">
          <ul className="last_list">
            <li>
              <img src="image/wanted.png" />
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
                <img id="minipic" src="image/naver_blog.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img id="minipic" src="image/chat.png" />
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
            <img src="image/korea.png" alt="한국" />
            <select className="lang_select">
              <option value="0">한국(한국어)</option>
              <option value="1">일본어</option>
              <option value="2">영어</option>
              <option value="3">중국어</option>
            </select>
          </div>
        </div>
      </footer>

      <section className="modal_all">
        <section className="modal_center">
          <section className="modal_flex">
            <div className="modal_top_img">
              <img src="image/wantedd.png" />
            </div>
            <div className="modal_all_flex">
              <div className="modal_header">
                <h1>
                  직장인을 위한
                  <br />
                  커리어 플랫폼, 원티드!
                </h1>
                <h2>
                  커리어 성장과 행복을 위한 여정
                  <br />
                  지금 원티드에서 시작하세요.
                </h2>
              </div>
              <div className="modal_email_3">
                <div className="modal_email2">
                  <label type="email">이메일</label>
                  <input
                    type="email"
                    placeholder="이메일을 입력해 주세요."
                    id="email"
                    value
                  />
                </div>
              </div>
              <div className="modal_bt_style">
                <button onclick="modal_email()" className="keep_join">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="#FFF"
                      stroke-width="2"
                    >
                      <rect
                        width="17.2"
                        height="14"
                        x="3.4"
                        y="5"
                        rx="3"
                      ></rect>
                      <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                    </g>
                  </svg>{" "}
                  이메일로 계속하기
                </button>
                <div id="modal_or">or</div>
                <div id="modal_next">다음 계정으로 계속하기</div>
                <div className="modal_bt_flex">
                  <div className="modal_bt_flex1">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                      >
                        <path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                        ></path>
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="23"
                        viewBox="0 0 12 23"
                      >
                        <path
                          fill="#fff"
                          fill-rule="nonzero"
                          d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
                        ></path>
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                      >
                        <g fill="none" fill-rule="nonzero">
                          <path
                            fill="#EA4335"
                            d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"
                          ></path>
                          <path d="M0 0L23 0 23 23 0 23z"></path>
                        </g>
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                      >
                        <path
                          fill="#fff"
                          fill-rule="nonzero"
                          d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="modal_bt_flex2">
                    <button>Kakao</button>
                    <button>Facebook</button>
                    <button>Google</button>
                    <button>Apple</button>
                  </div>
                </div>
              </div>
              <div className="modal_footer">
                <p>
                  걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                  <br />
                  회원가입 시 <a herf="">개인정보 처리방침</a>과{" "}
                  <a href="#">이용약관</a>을 확인하였으며, 동의합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="modal_email_js">
            <section className="modal_email">
              <div className="modal_nav_header">
                <section className="modal_email_header">
                  <div>
                    <button className="modaloff_icon" onclick="modaloff()">
                      ㅇ
                    </button>
                  </div>
                  <div className="modal_email_header_center">
                    <p>회원가입</p>
                  </div>
                  <div className="close_icon" onclick="modalclose()">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </section>
              </div>
              <div className="modal_email_display">
                <section className="modal_email_body">
                  <div className="disable">
                    <div className="margin_label">
                      <label>이메일</label>
                    </div>
                    <input type="email" placeholder="none" />
                  </div>
                  <div>
                    <div className="margin_label">
                      <label>이름</label>
                    </div>
                    <input type="text" placeholder="이름을 입력해주세요." />
                  </div>
                  <div className="disable">
                    <div className="margin_label">
                      <label>휴대폰 번호</label>
                    </div>
                    <select className="phone_number">
                      <option>South Korea +82</option>
                      <option>Seoul +02</option>
                    </select>
                    <div className="able">
                      <input type="number" />
                      <button>
                        <span>인증번호 받기</span>
                      </button>
                    </div>
                    <input type="text" placeholder="인증번호를 입력해주세요." />
                  </div>
                  <div>
                    <div className="margin_label">
                      <label>비밀번호</label>
                    </div>
                    <input
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    <input
                      type="password"
                      placeholder="비밀번호를 다시 한번 입력해주세요."
                    />
                    <p id="mini_p">
                      영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자
                      이상
                      <br />
                      16자 이하로 입력해주세요.
                    </p>
                  </div>
                  <div className="email_checkbox">
                    <div id="all_check">
                      <input
                        onclick="checkall()"
                        className="checkbox_all"
                        type="checkbox"
                      />
                      <label>전체동의</label>
                    </div>
                    <div>
                      <input className="check_select1" type="checkbox" />
                      <label>만 14세 이상입니다. (필수)</label>
                    </div>
                    <div>
                      <input className="check_select2" type="checkbox" />
                      <label>oneID 이용약관 동의 (필수)</label>
                    </div>
                    <div>
                      <input className="check_select3" type="checkbox" />
                      <label>개인정보 및 수집 이용 동의 (필수)</label>
                    </div>
                  </div>
                  <button className="last_bt">
                    <span>가입하기</span>
                  </button>
                </section>
              </div>
            </section>
          </section>
          <div className="black"></div>
        </section>
      </section>
    </body>
  );
}

export default App;
