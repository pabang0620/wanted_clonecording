import React from "react";
import ButtonInfo from "./ButtonInfo";

const Buttonall = () => {
  return (
    <div>
      <div className="header_articleButton">
        <button>
          <ButtonInfo tag="연봉이 최고의 복지" />
        </button>
        <button>
          <ButtonInfo tag="재택근무" />
        </button>
        <button>
          <ButtonInfo tag="퇴사율 10% 이하" />
        </button>
        <button>
          <ButtonInfo tag="급성장 중" />
        </button>
        <button>
          <ButtonInfo tag="병역특례" />
        </button>
        <button>
          <ButtonInfo tag="50인 이하" />
        </button>
        <button>
          <ButtonInfo tag="50인 이상" />
        </button>
        <button>
          <ButtonInfo tag="업력 5년 이상" />
        </button>
        <button>
          <ButtonInfo tag="유연근무" />
        </button>
        <button>
          <ButtonInfo tag="자유로운 휴가" />
        </button>
        <button>
          <ButtonInfo tag="일한만큼 받는 보상" />
        </button>
        <button>
          <ButtonInfo tag="수평적 문화" />
        </button>
        <button>
          <ButtonInfo tag="요즘 뜨는 산업" />
        </button>
        <button>
          <ButtonInfo tag="식사 간식 제공" />
        </button>
      </div>
    </div>
  );
};

export default Buttonall;
