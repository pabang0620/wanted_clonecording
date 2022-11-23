import React from "react";

const Weather = () => {
  return (
    <>
      <div className="col-lg-2"></div>
      <div className="col-lg-4">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                날씨
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">날씨 상세 API</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
