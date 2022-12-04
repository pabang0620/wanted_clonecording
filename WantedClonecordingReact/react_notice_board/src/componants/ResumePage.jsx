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
      <div className="resumecenter">
        <div className="flexRow">
          <p>최근 문서</p>
          <p className="introduceResume">
            원티드 이력서 소개
            <i class="fa-solid fa-circle-info"></i>
          </p>
        </div>
      </div>
      <div className="resumeFilecenter">
        <div className="flexbaseline">
          <div className="resumeBox">
            <div className="resumeBoxIcon">
              <i class="fa-regular fa-clone"></i>
            </div>
            <p>새 이력서 작성</p>
          </div>
          <div className="resumeBox">
            <div className="resumeBoxIcon2">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
            <p>파일 업로드</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
