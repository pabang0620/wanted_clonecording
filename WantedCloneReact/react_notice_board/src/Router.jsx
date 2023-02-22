import "./App.css";
import React from "react";
import Page from "./Page";
import Main from "./Main";
import Info from "./Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterPage from "./Info/FilterPage";
import ResumePage from "./componants/ResumePage";
import Bookmarkcom from "./componants/Bookmarkcom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/search" element={<FilterPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="/info" element={<Info />} />
        <Route path="/profile/bookmarks" element={<Bookmarkcom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
