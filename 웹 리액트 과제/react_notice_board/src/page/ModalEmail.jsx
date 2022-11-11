import React from "react";
import Checkbox from "./CheckBox";
import { useState, useEffect } from "react";

const ModalEmail = (props) => {
  const CloseModal = () => {
    props.setModalPageopen(false);
  };
  const [pwvalue, setPwvalue] = useState("");
  const [repwvalue, setRepwvalue] = useState("");
  const [idvalue, setIdvalue] = useState("");
  const [numbervalue, setNumbervalue] = useState("");

  const [pwstatus, setPwstatus] = useState(false);
  const [repwstatus, setRepwstatus] = useState(false);
  const [idstatus, setIdstatus] = useState(false);
  const [numberstatus, setNumberstatus] = useState(false);

  const idstatuschange = (e) => {
    setIdvalue(e.target.value);
    const Regex = /^[가-힣]{2,15}$/;
    if (Regex.test(e.target.value)) {
      setIdstatus(true);
    } else {
      setIdstatus(false);
    }
  };

  const numberstatuschange = (e) => {
    setNumbervalue(e.target.value);
    const Regex = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;
    if (Regex.test(e.target.value)) {
      setNumberstatus(true);
    } else {
      setNumberstatus(false);
    }
  };

  const repwstatuscheck = (e) => {
    setRepwvalue(e.target.value);
    if (e.target.value === pwvalue) {
      setRepwstatus(true);
    } else {
      setRepwstatus(false); // ture 가 아니라 리턴을 주고 useeffect를 참고하여 해보야될거같음
    }
    console.log(repwvalue);
  };
  const pwstatuschange = (e) => {
    setPwvalue(e.target.value);
    const Regex = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    if (Regex.test(e.target.value)) {
      setPwstatus(true);
    } else {
      setPwstatus(false);
    }
  };
  const [getCode, setgetCode] = useState(true);
  useEffect(() => {
    if (numberstatus) {
      setgetCode(false);
      return;
    }
    setgetCode(true);
  }, [numberstatus]);

  const [neverAllow, setNeverAllow] = useState(true);
  useEffect(() => {
    if (pwstatus && idstatus && numberstatus && repwstatus) {
      setNeverAllow(false);
      return;
    }
    setNeverAllow(true);
  }, [pwstatus, idstatus, numberstatus, repwstatus]);

  const testone = () => {
    alert("버튼 활성화 확인");
  };

  // 회원가입 클릭시 로컬스토리지에 저장

  let localStorage = window.localStorage;
  return (
    <div>
      <section className="modal_email">
        <div className="modal_nav_header">
          <section className="modal_email_header">
            <div>
              <button onClick={CloseModal} id="modaloff_icon">
                ㅇ
              </button>{" "}
            </div>
            <div className="modal_email_header_center">
              <p>회원가입</p>
            </div>
            <div className="close_icon" onClick={CloseModal}>
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
              <input placeholder={props.checkEmailvalue} disabled />
            </div>
            <div>
              <div className="margin_label">
                <label>이름</label>
              </div>
              <input
                value={idvalue}
                onChange={idstatuschange}
                type="text"
                placeholder="이름을 입력해주세요."
              />
            </div>
            {!idstatus && idvalue.length > 0 && (
              <div className="errorMessageWrap">이름을 정확히 입력해주세요</div>
            )}
            <div className="disable">
              <div className="margin_label">
                <label>휴대폰 번호</label>
              </div>
              <select className="phone_number">
                <option>South Korea +82</option>
                <option>Seoul +02</option>
              </select>
              <div className="able">
                <div>
                  <input
                    value={numbervalue}
                    onChange={numberstatuschange}
                    placeholder="(예시)010-1234-5678"
                  />
                  <div className="errorMessageWrap">
                    {!numberstatus && numbervalue.length > 0 && (
                      <div>예시와 같이 작성해주세요</div>
                    )}
                  </div>
                </div>
                <button
                  onClick={testone}
                  disabled={getCode}
                  id={numberstatus ? "getcodeblue2" : "getcodeblue"}
                >
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
                value={pwvalue}
                onChange={pwstatuschange}
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <div className="errorMessageWrap">
                {!pwstatus && pwvalue.length > 0 && (
                  <div>올바른 비밀번호를 입력해주세요.</div>
                )}
              </div>

              <div className="margin_label">
                <label>비밀번호 확인</label>
              </div>

              <input
                value={repwvalue}
                type="password"
                onChange={repwstatuscheck}
                placeholder="비밀번호를 다시 한번 입력해주세요."
              />
              <div className="errorMessageWrap">
                {!repwstatus && repwvalue.length > 0 && (
                  <div>동일한 비밀번호를 입력해주세요.</div>
                )}
              </div>
              <p id="mini_p">
                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
                <br />
                16자 이하로 입력해주세요.
              </p>
            </div>
            <Checkbox />
            <button
              onClick={() => {
                localStorage.setItem("id", props.checkEmailvalue);
                localStorage.setItem("pw", pwvalue);
              }}
              disabled={neverAllow}
              className={neverAllow ? "last_bt" : "last_bt2"}
            >
              <span>가입하기</span>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ModalEmail;
