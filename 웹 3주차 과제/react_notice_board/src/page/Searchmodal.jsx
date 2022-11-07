import React from "react";
import "./Searchmodal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchmodal = ({ setSearchModalon }) => {
  const CloseSearch = () => {
    setSearchModalon(false);
  };

  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate();

  const Searchthings = () => {
    navigate(`/search/${searchKeyword}`);
  };
  return (
    <div>
      <div className="searchmodalall">
        <div className="searchmodalheader">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            value={searchKeyword}
            placeholder="#태그, 회사, 포지션 검색"
            onKeyPress={(e) => {
              if (e.key === "Enter" && searchKeyword.length < 2) {
                alert("검색어를 두글자이상 입력해주세요");
                return;
              }
              if (e.key === "Enter") {
                Searchthings();
              }
            }}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
            }}
          />
        </div>
        <section className="searchmodalljustify">
          <div className="searchmodalbody">
            <h6>추천태그로 검색해보세요</h6>
            <p>기업태그 홈 이동하기</p>
          </div>
        </section>
        <section className="searchmodalljustify2">
          <div className="searchmodalrow">
            <button>#퇴사율5%이하</button>
            <button>#스톡옵션</button>
            <button>#연봉상위2~5%</button>
            <button>#주35시간</button>
            <button>#노트북</button>
          </div>
        </section>
      </div>
      <div onClick={CloseSearch} className="black"></div>
    </div>
  );
};

export default Searchmodal;
