import React from "react";
import "./Modalon";
import { useState, useEffect } from "react";
import ModalEmail from "./ModalEmail";
import ModalPw from "./ModalPw";
import styled from "styled-components";

// const Displaynone = (props) => {
//   props.modalPwinput &&
//     styled.div`
//       display: none;
//     `;
// };

const ModalPage = ({ setModalPageopen }) => {
  const CloseModal = () => {
    setModalPageopen(false);
  };
  const [modalPwinput, setModalPwinput] = useState(false);
  const [buttonIdstate, setButtonIdstate] = useState(false);
  // 모달 끄기
  const [KeepEmail, setKeepEmail] = useState(false);

  // 이메일 계속하기 클릭시 모달 옮김
  const joinbegin = () => {
    if (checkEmailvalue === localStorage.getItem("id")) {
      setModalPwinput(true);
      setButtonIdstate(true);
    }
    if (checkEmailvalue !== localStorage.getItem("id")) {
      setKeepEmail(true);
    }
    if (modalPwinput) {
      //스타일드 컴포넌트 안에 삼항 연산자
    }
  };
  const [checkEmailvalue, setCheckEmailvalue] = useState("");

  const [emailstatus, setEmailstatus] = useState(false);

  const Emailstatuschange = (e) => {
    setCheckEmailvalue(e.target.value);
    const Regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (Regex.test(e.target.value)) {
      setEmailstatus(true);
    } else {
      setEmailstatus(false);
    }
  };

  // useEffect 는 범위 지정  저렇게 정의하는게 ? 어디 위치에 쓰는건가요
  //페이지 나타날때[]
  //데이터가 업데이트될때 [email]
  //페이지가 사라질때
  const [notAllow, setNotAllow] = useState(true);
  useEffect(() => {
    if (emailstatus) {
      //emailstatus 가 트루이면 false로 바꿔라 가 맞나? 맞다 if문 첫문장 기본값은 true
      setNotAllow(false);
      return; // 여기 리턴이랑 추가 코드는 왜 무슨 용도? 탈출용도이다 탈출하지 않으면 계속 false 값
    }
    setNotAllow(true);
  }, [emailstatus]);
  // useEffect(()=>{
  //하고싶은것  return 내부값은 페이지가 사라질때
  //   return(()=>{
  //     console.log();
  //   })
  // },[])
  return (
    <section className="modal_centeron">
      <section className="modal_flex">
        <div className="modal_top_img">
          <div></div>
          <img src={process.env.PUBLIC_URL + "/image/wantedd.png"} />
          <div className="close_icon" onClick={CloseModal}>
            <i className="fa-solid fa-xmark"></i>
          </div>
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
            <div
              className={modalPwinput === true ? "displaynone" : "modal_email2"}
            >
              <label for="email">이메일</label>
              <input
                value={checkEmailvalue}
                type="email"
                id="email"
                placeholder="이메일을 입력해주세요"
                onChange={Emailstatuschange}
              />
              <div className="errorMessageWrap">
                {!emailstatus && checkEmailvalue.length > 0 && (
                  <div>올바른 이메일을 입력해주세요.</div>
                )}
              </div>
            </div>
          </div>
          <div className="modal_bt_style">
            <button
              onClick={joinbegin}
              id={buttonIdstate ? "keep_joinHidden" : "keep_join"}
              disabled={notAllow}
            >
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
                  <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                  <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                </g>
              </svg>{" "}
              이메일로 계속하기
            </button>
            {KeepEmail && (
              <ModalEmail
                setModalPageopen={setModalPageopen}
                checkEmailvalue={checkEmailvalue}
              />
            )}
            {modalPwinput && (
              <ModalPw
                setModalPageopen={setModalPageopen}
                checkEmailvalue={checkEmailvalue}
              />
            )}
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

      <div>
        <div onClick={CloseModal} className="black"></div>
      </div>
    </section>
  );
};
export default ModalPage;
