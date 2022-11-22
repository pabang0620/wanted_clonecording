import React from "react";
import NavyAll from "./NavyAll";
import { useDispatch, useSelector } from "react-redux";
import dummy from "../data.json";
import ImgNewInfo from "../Info/ImgNewsInfo";

const Bookmarkcom = () => {
  const bookmarkList = useSelector(
    (state) => state.bookmarkReducer.bookmarkstate
  );
  const bookmarkdata = dummy.company.filter((data) =>
    bookmarkList.includes(data.id)
  );
  console.log(bookmarkList);
  return (
    <div>
      <div>
        <NavyAll />
      </div>
      <div>북마크</div>
      <div className="bookmarktopmargin">
        <div className="bookmarkstyle">북마크</div>
        <div className="ImgNewsInfoFlexFlex">
          <ul className="ImgNewsInfoFlex">
            {bookmarkdata.map((companyinfo) => (
              <ImgNewInfo
                key={companyinfo.id}
                id={companyinfo.id}
                src={companyinfo.src}
                job={companyinfo.job}
                is={companyinfo.is}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bookmarkcom;
