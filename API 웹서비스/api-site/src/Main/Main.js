import React from "react";
import Weather from "../weather/Weather";
import News from "../news/News";
import "./Main.css";
import Navbar from "../컴포넌트/Navbar";
import Chart from "../Ranking/Chart";
import Ranking from "../Ranking/Ranking";
import RecommandItem from "../Ranking/RecommandItem";
import Footer from "../컴포넌트/Footer";

const Main = () => {
  return (
    <>
      {/*   어두운 화면 전환 버튼 구현  */}
      {/* <Navbar /> */}
      <div className="row">
        <Weather />
        <News />
      </div>
      <div className="mainbox_style">
        <Chart />
        {/* <Ranking /> */}
      </div>
      {/* <div className="justCenter">
        <RecommandItem />
        <Footer />
      </div> */}
    </>
  );
};

export default Main;
