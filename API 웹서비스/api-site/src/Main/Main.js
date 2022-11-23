import React from "react";
import Weather from "../weather/Weather";
import News from "../news/News";
import "./Main.css";
import Navbar from "../컴포넌트/Navbar";
import GetItem from "../Get-item/GetItem";
import GetItembox from "../Get-item/GetItembox";
import RecommandItem from "../Get-item/RecommandItem";
import Footer from "../컴포넌트/Footer";

const Main = () => {
  return (
    <>
      {/*   어두운 화면 전환 버튼 구현  */}
      <Navbar />
      <div className="row">
        <Weather />
        <News />
      </div>
      <div className="mainbox_style">
        <GetItem />
        <GetItembox />
      </div>
      <div className="justCenter">
        <RecommandItem />
        <Footer />
      </div>
    </>
  );
};

export default Main;
