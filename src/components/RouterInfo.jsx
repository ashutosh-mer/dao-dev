import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import SiteFooter from "./SiteFooter";
import ModularPage from "../pages/ModulerPage";
import ContactUs from "../pages/ContactUs";
const RouterInfo = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path="/work" element={<ModularPage />} />
        </Routes>

        <Routes>
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>

        <SiteFooter />
      </Router>
    </>
  );
};

export default RouterInfo;
