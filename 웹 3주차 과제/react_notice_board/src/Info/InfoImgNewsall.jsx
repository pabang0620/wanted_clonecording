import React from "react";
import ImgNewInfo from "./ImgNewsInfo";
import dummy from "../data.json";

const InfoImgNewsall = () => {
  return (
    <div>
      <div className="ImgNewsInfoFlexFlex">
        <ul className="ImgNewsInfoFlex">
          {dummy.company.map((companyinfo) => (
            <ImgNewInfo
              key={companyinfo.id}
              src={companyinfo.src}
              job={companyinfo.job}
              is={companyinfo.is}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoImgNewsall;
