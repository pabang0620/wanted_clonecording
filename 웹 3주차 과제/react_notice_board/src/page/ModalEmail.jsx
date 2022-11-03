import React from "react";
import Checkbox from "./CheckBox";
import { useState, useEffect } from "react";

const ModalEmail = (props) => {
  const CloseModal = () => {
    props.setModalPageopen(false);
  };
  const [pwvalue, setPwvalue] = useState("");
  const [repwvalue, setRevalue] = useState("");

  const [pwstatus, setPwstatus] = useState(false);
  const [repwstatus, setRepwstatus] = useState(false);
  const repwstatuscheck = (e) => {
    setRevalue(e.target.value);
    if (repwvalue !== pwvalue) {
      setRepwstatus(true);
    } else {
      setRepwstatus(false);
    }
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
  // const [neverAllow, setNeverAllow] = useState(true);
  // useEffect(() => {
  //   if (pwstatus) {
  //     setNeverAllow(false);
  //     return;
  //   }
  //   setNeverAllow(true);
  // }, [pwstatus]);
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
                <input type="number" placeholder="(예시)01016895161" />
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
              <input
                value={repwstatus}
                onChange={repwstatuscheck}
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
              />
              <div className="errorMessageWrap">
                {repwstatus && pwvalue.length > 0 && (
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
            <button className="last_bt">
              <span>가입하기</span>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ModalEmail;
