import React from "react";

const ImgAds = ({ src, logo, job, is }) => {
  return (
    <div className="ImgAdsborder">
      <div className="ImgAds_boxsize">
        <img src={src} />
      </div>
      <div>
        <div className="ImgAdsLogopic">
          <img src={logo} />
        </div>
      </div>
      <div className="ImgAds_boxsize2">
        <footer>
          <div>
            <h4>{job}</h4>
            <h5>{is}</h5>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ImgAds;
