import React from "react";
import { useState } from "react";
import Searchmodal from "../page/Searchmodal";

const Searchcom = () => {
  const [SearchModalon, setSearchModalon] = useState(false);
  const SearchOn = () => {
    setSearchModalon(true);
  };
  return (
    <div className="SearchIcon">
      <a onClick={SearchOn}>
        <i id="searchIcon" className="fa-solid fa-magnifying-glass"></i>
      </a>
      {SearchModalon === true ? (
        <Searchmodal setSearchModalon={setSearchModalon} />
      ) : null}
    </div>
  );
};

export default Searchcom;
