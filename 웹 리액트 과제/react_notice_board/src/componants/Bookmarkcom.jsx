import React from "react";
import NavyAll from "./NavyAll";
import { useDispatch, useSelector } from "react-redux";
import dummy from "../data.json";

const Bookmarkcom = () => {
  const bookmarkList = useSelector((state) => state.bookmark.bookmarkstate);
  const bookmarkdata = () => {
    dummy.company.filter(
      (
        data //return  빼도됨?   d코드 더
      ) => bookmarkList.includes(data.id)
    );
  };
  return (
    <div>
      <div>
        {" "}
        <NavyAll />
      </div>
      <div>북마크</div>
      <div>{bookmarkList.map()}</div>
    </div>
  );
};

export default Bookmarkcom;
