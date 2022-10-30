import React from "react";
import { useEffect } from "react";

const { kakao } = window;

const Kakaomap = () => {
  useEffect(() => {
    const container = document.createElement("map");
    const options = {
      center: new kakao.maps.LatLng(33, 126),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  });
  return <div id="map" style={{ width: "700", height: "254" }}></div>;
};

export default Kakaomap;
