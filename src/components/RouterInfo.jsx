import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import SiteFooter from "./SiteFooter";
const RouterInfo = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <SiteFooter />
      </Router>
    </>
  );
};

export default RouterInfo;
