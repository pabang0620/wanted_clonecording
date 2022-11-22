import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login, Logout, initialStates } from "../module/ModalStore";
import styled from "styled-components";

const FindFw = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ModalPw = (setModalPageopen) => {
  const [pwstatus, setPwstatus] = useState("");

  const navigate = useNavigate();
  const disPatch = useDispatch();

  const inputPw = () => {
    if (pwstatus === localStorage.getItem("pw")) {
      disPatch(Login());
      // disPatch();
      // console.log(test2);
      // 프롭스로 close모달 ,
    }
    if (pwstatus !== localStorage.getItem("pw")) {
      alert("비밀번호를 다시 확인해주세요.");
    }
  };

  const onChangePw = (e) => {
    setPwstatus(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <section>
            <div className="pwpagestyle">
              <div>
                <div className="margin_label">
                  <label>비밀번호</label>
                </div>
                <input
                  value={pwstatus}
                  onChange={onChangePw}
                  className="pwinput"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>

              <button onClick={inputPw} id="keep_join">
                다음
              </button>
              <FindFw>비밀번호 초기화/변경</FindFw>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ModalPw;
