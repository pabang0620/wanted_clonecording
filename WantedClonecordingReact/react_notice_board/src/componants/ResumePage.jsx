import React from "react";
import NavyAll from "./NavyAll";
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <div>
      <nav>
        <NavyAll />
      </nav>
      <div className="resumePagePic">
        <img
          src={process.env.PUBLIC_URL + "/image/resumeimg.png"}
          alt="이미지"
        />
      </div>

      <div>
        <p>최근 문서</p>
        <p>원티드 이력서 소개</p>
      </div>
      <div>
        <div>
          <p>새 이력서 작성</p>
        </div>
        <div>
          <p>파일 업로드</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
