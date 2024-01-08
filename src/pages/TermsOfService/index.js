import React from "react";
import { Link } from "react-router-dom";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";

const TermsOfServicePage = () => {
  return (
    <main>
      <div className="flex justify-center items-center h-screen pt-12 pb-16">
        <header className="absolute top-0 h-12 w-full !bg-primary bg-opacity-60 text-white">
          <div className="flex items-center">
            <div className="h-12 w-[42px]">
              <img
                src="./images/logo.png"
                alt="Logo"
                width={327}
                height={373}
              />
            </div>
            <div className="flex flex-1 justify-center">
              <ul className="flex justify-center items-center mb-0">
                <li className="mx-2">
                  <Link
                    to="/"
                    className="flex p-3 leading-6 text-nowrap items-center no-underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="/our-story" className="p-3 leading-6 text-nowrap">
                    Our Story
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="/get-engaged" className="p-3 leading-6 text-nowrap">
                    Get Engaged
                  </Link>
                </li>
                <li className="mx-2">
                  <Link
                    to="/get-educated"
                    className="p-3 leading-6 text-nowrap"
                  >
                    Get Educated
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="/donate" className="p-3 leading-6 text-nowrap">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/contact-us" className="p-3 leading-6 text-nowrap">
                Contact Us
              </Link>
            </div>
          </div>
        </header>
        <div className="container text-left">
          <h2 className="text-left text-4xl mb-6">Terms Of Service</h2>
          <h3 className="text-left text-xl mb-2 font-bold">
            $Literacy Foundation Privacy Policy - Effective Date: December 16,
            2023
          </h3>
          <h3 className="text-left text-xl mb-2 font-bold">
            $Literacy Foundation Revised Terms of Service - Effective Date:
            December 26, 2023
          </h3>
          <h4 className="text-xl mb-1">1. Acceptance of Terms</h4>
          <p className="ml-6 mb-1">
            Using our services signifies your agreement with these terms.
          </p>
          <h4 className="text-xl mb-1">2. Service Use</h4>
          <p className="ml-6 mb-1">
            For personal, non-commercial use. Comply with laws and respect
            others.
          </p>
          <h4 className="text-xl mb-1">3. Intellectual Property</h4>
          <p className="ml-6 mb-1">
            All content is the Foundation's property. No unauthorized use.
          </p>
          <h4 className="text-xl mb-1">4. Financial Advice Disclaimer</h4>
          <p className="ml-6 mb-1">
            Our information is educational, not professional financial advice.
            Consult a certified financial advisor for professional guidance.
          </p>
          <h4 className="text-xl mb-1">5. Operational Capacity</h4>
          <p className="ml-6 mb-1">
            As a non-profit, we handle inquiries on a "best effort basis" and
            are not liable for delays or unaddressed issues.
          </p>
          <h4 className="text-xl mb-1">6. Liability Limitation</h4>
          <p className="ml-6 mb-1">
            Protected against frivolous legal claims and not liable for
            service-related damages.
          </p>
          <h4 className="text-xl mb-1">7. Service Modifications</h4>
          <p className="ml-6 mb-1">
            We may change or discontinue services without notice.
          </p>
          <h4 className="text-xl mb-1">8. Privacy Policy</h4>
          <p className="ml-6 mb-1">Governed by our Privacy Policy.</p>
          <h4 className="text-xl mb-1">9. Governing Law</h4>
          <p className="ml-6 mb-1">Subject to jurisdictional laws.</p>
          <h4 className="text-xl mb-1">10. Contact</h4>
          <p className="ml-6 mb-1">
            For any questions, email{" "}
            <Link
              to="mailto:webadmin@literacy-foundation.org"
              className="underline hover:text-primary transition-all duration-300"
            >
              webadmin@literacy-foundation.org
            </Link>
            .
          </p>
        </div>
      </div>
      <footer className="fixed flex flex-col items-center bottom-0 w-full !bg-primary bg-opacity-60 text-white">
        <ul className="flex my-2">
          <li className="mx-4">
            <Link to="/">Get Engaged</Link>
          </li>
          <li className="mx-4">
            <Link to="/">Get Educated</Link>
          </li>
          <li className="mx-4">
            <Link to="/">Donate</Link>
          </li>
          <li className="mx-4">
            <Link to="/">Our Story</Link>
          </li>
        </ul>
        <ul className="flex mb-2">
          <li className="text-xs mx-4">
            <p>Copyright © 2023 Literacy Foundation. All Rights Reserved.</p>
          </li>
          <li className="text-xs mx-4">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="text-xs mx-4">
            <Link to="/terms-of-service">Terms of service</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default TermsOfServicePage;
