import "./Main.css";
import React from "react";
import MainBody from "./Main/MainBody";
import Footer from "./componants/footer";
import NavyAll from "./componants/NavyAll";

function App() {
  return (
    <div>
      <NavyAll />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
