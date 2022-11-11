import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login, Logout } from "../module/ModalStore";

const ModalPw = (setModalPageopen) => {
  const [pwstatus, setPwstatus] = useState("");

  const navigate = useNavigate();
  const disPatch = useDispatch();

  const inputPw = () => {
    if (pwstatus === localStorage.getItem("pw")) {
      disPatch({ type: "Login" });
      console.log(test2);
    }
    if (pwstatus !== localStorage.getItem("pw")) {
      alert("비밀번호를 다시 확인해주세요.");
    }
  };
  const test2 = useSelector((state) => state.naviLoginstatus);

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

              <div>비밀번호 초기화/변경</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ModalPw;
