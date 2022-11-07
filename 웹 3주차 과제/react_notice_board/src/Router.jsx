import "./App.css";
import React from "react";
import Page from "./Page";
import Main from "./Main";
import Info from "./Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterPage from "./Info/FilterPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search/:" element={<FilterPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
