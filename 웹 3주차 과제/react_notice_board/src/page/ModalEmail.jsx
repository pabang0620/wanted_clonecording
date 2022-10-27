import React from "react";

const ModalEmail = ({ setModalPageopen }) => {
  const CloseModal = () => {
    setModalPageopen(false);
  };
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
              <input type="password" placeholder="비밀번호를 입력해주세요" />
              <input
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
              />
              <p id="mini_p">
                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
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
    </div>
  );
};

export default ModalEmail;
