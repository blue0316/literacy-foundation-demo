import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutUsPage from "../pages/AboutUs";
import GetEngagedPage from "../pages/GetEngaged";
import GetEducatedPage from "../pages/GetEducated";
import WeHaveToTellYouPage from "../pages/WeHaveToTellYou";
import DonatePage from "../pages/Donate";
import ContactUsPage from "../pages/ContactUs";

const CustomRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/get-engaged" element={<GetEngagedPage />} />
      <Route path="/get-educated" element={<GetEducatedPage />} />
      <Route path="/we-have-to-tell-you" element={<WeHaveToTellYouPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  );
};

export default CustomRouters;
