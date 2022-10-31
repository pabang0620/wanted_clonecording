import { Map, MapMarker } from "react-kakao-maps-sdk";

function Kakaomap() {
  return (
    <Map
      center={{ lat: 37.5505712, lng: 126.972577051 }}
      style={{ width: "700px", height: "254px" }}
    >
      <MapMarker position={{ lat: 37.5505712, lng: 126.972577051 }}></MapMarker>
    </Map>
  );
}
export default Kakaomap;
