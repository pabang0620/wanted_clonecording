import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                뉴스 슬릭 넣기
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">뉴스 상세 API</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </>
  );
};

export default News;
