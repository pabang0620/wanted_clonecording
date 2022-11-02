import React from "react";
import ImgNewInfo from "./ImgNewsInfo";
import dummy from "../data.json";
import { Link } from "react-router-dom";
import Page from "../Page";

const InfoImgNewsall = () => {
  return (
    <div>
      <div className="ImgNewsInfoFlexFlex">
        <ul className="ImgNewsInfoFlex">
          {dummy.company.map((companyinfo) => (
            <Link to={`/page/${companyinfo.id}`}>
              <ImgNewInfo
                key={companyinfo.id}
                id={companyinfo.id}
                src={companyinfo.src}
                job={companyinfo.job}
                is={companyinfo.is}
                ImgNewInfo={ImgNewInfo}
              />{" "}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoImgNewsall;
