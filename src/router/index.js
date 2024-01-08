import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import OurStoryPage from "../pages/OurStory";
import GetEngagedPage from "../pages/GetEngaged";
import GetEducatedPage from "../pages/GetEducated";
import DonatePage from "../pages/Donate";
import ContactUsPage from "../pages/ContactUs";
import PrivacyPolicyPage from "../pages/PrivacyPolicy";
import TermsOfServicePage from "../pages/TermsOfService";

const CustomRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-story" element={<OurStoryPage />} />
      <Route path="/get-engaged" element={<GetEngagedPage />} />
      <Route path="/get-educated" element={<GetEducatedPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
    </Routes>
  );
};

export default CustomRouters;
