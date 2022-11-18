import React from "react";
import NavyAll from "./NavyAll";
import { useDispatch, useSelector } from "react-redux";

const Bookmarkcom = () => {
  const bookmarkList = useSelector((state) => state.bookmark.bookmarkstate);
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
