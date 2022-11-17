import "./App.css";
import React from "react";
import Main from "./page/Main";
import Footer from "./componants/footer";
import { useParams } from "react-router-dom";
import dummy from "./data.json";

function App() {
  const params = useParams();
  const wd = dummy.company[params.id];
  return (
    <>
      {wd && (
        <div>
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
