import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPageScroller from "react-page-scroller";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";

const PrivacyPolicyPage = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  return (
    <main>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
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
                    <Link to="/about-us" className="p-3 leading-6 text-nowrap">
                      Our Story
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link
                      to="/get-engaged"
                      className="p-3 leading-6 text-nowrap"
                    >
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
            <h2 className="text-left text-4xl mb-6">Privacy Policy</h2>
            <h3 className="text-left text-2xl mb-4">
              $Literacy Foundation Privacy Policy - Effective Date: December 16,
              2023
            </h3>
            <h4 className="text-xl mb-2">1. Introduction</h4>
            <p className="ml-6 mb-2">
              $Literacy Foundation ("we", "us") is committed to protecting your
              privacy. This Policy explains our practices regarding the
              collection, use, and protection of your personal information.
            </p>
            <h4 className="text-xl mb-2">2. Information Collection</h4>
            <p className="ml-6">
              We may collect personal and non-personal information such as:
            </p>
            <ul className="ml-12 mb-2 list-disc">
              <li>Contact details (name, address, email)</li>
              <li>Donation payment information</li>
              <li>Website usage data</li>
              <li>Communication preferences</li>
            </ul>
            <h4 className="text-xl mb-2">3. Use of Information</h4>
            <p className="ml-6">We may use your information to:</p>
            <ul className="ml-12 mb-2 list-disc">
              <li>Process donations and provide receipts</li>
              <li>Send updates and communications</li>
              <li>Improve our services</li>
              <li>Comply with legal requirements</li>
            </ul>
            <h4 className="text-xl mb-2">4. Sharing of Information</h4>
            <p className="ml-6 mb-2">
              We do not sell or trade your personal data. It may be shared with
              trusted partners solely for operational purposes like payment
              processing.
            </p>
            <h4 className="text-xl mb-2">
              5. Third-Party Websites and Services
            </h4>
            <p className="ml-6 mb-2">
              We may engage third-party services for various functions. While we
              prioritize your data's protection, we are not responsible for the
              privacy practices or data protection strategies of these
              third-party websites or services.
            </p>
            <h4 className="text-xl mb-2">6. Security</h4>
            <p className="ml-6 mb-2">
              We employ measures to safeguard your information, but please note
              that no transmission method is completely secure.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start h-screen py-16">
          <div className="container text-left">
            <h4 className="text-xl mb-2">7. Your Rights</h4>
            <p className="ml-6">You have the opportunity to:</p>
            <ul className="ml-12 mb-2 list-disc">
              <li>
                Request access to, modification of, or deletion of your personal
                data
              </li>
              <li>Opt-out of specific communications</li>
              <li>Inquire about data transfer or request data deletion</li>
              <li>Express concerns or submit inquiries</li>
            </ul>
            <h4 className="text-xl mb-2">8. Cookies and Tracking</h4>
            <p className="ml-6">
              We use cookies to improve your website experience. Cookie
              preferences can be managed in your browser.
            </p>

            <h4 className="text-xl mb-2">9. Third-Party Links</h4>
            <p className="ml-6 mb-2">
              Our website includes links to external sites, whose privacy
              practices are not covered by this Policy.
            </p>
            <h4 className="text-xl mb-2">10. Children's Privacy</h4>
            <p className="ml-6 mb-2">
              We do not knowingly collect data from under-13s. Contact
              webadmin@literacy-foundation.org to address concerns.
            </p>
            <h4 className="text-xl mb-2">11. Changes to Privacy Policy</h4>
            <p className="ml-6 mb-2">
              We may modify this Policy, with the latest version available on
              our website.
            </p>
            <h4 className="text-xl mb-2">12. Contact Us</h4>
            <p className="ml-6 mb-2">
              For privacy-related inquiries, contact{" "}
              <a
                href="mailto:webadmin@literacy-foundation.org"
                className="underline hover:text-primary transition-all duration-300"
              >
                webadmin@literacy-foundation.org
              </a>
              . By using our services, you consent to this Privacy Policy.
            </p>
          </div>
        </div>
      </ReactPageScroller>
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

export default PrivacyPolicyPage;
