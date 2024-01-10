import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import { Link } from "react-router-dom";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";

const DonatePage = () => {
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
        <div className="flex justify-center items-center h-screen pb-16">
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
          <div className="container">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex items-center">
                <img
                  src="./images/donate.jpg"
                  alt="Vision"
                  width={5376}
                  height={3584}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-6 text-4xl leading-normal">
                  Donation Disclaimer:
                </h3>
                <p className="text-2xl mb-4">
                  Literacy Foundation’s application for 501(c)(3) status is
                  pending.  It is expected that contributions made after
                  September 20, 2023 will be tax deductible once Literacy
                  Foundation receives its 501(c)(3) status.
                </p>
                <p className="text-2xl mb-10">
                  Contributions to Literacy Foundation are not currently
                  deductible for federal income tax purposes as charitable
                  contributions.
                </p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-primary to-supportive group-hover:from-supportive group-hover:to-primary hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 max-w-40">
                  <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white white:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Donate Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen pb-16">
          <div className="container">
            <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col justify-center col-span-2">
                <p className="text-xl mb-4">
                  Dear Supporters,
                  <br /> <br />
                  I'm excited to share the mission of the $Literacy Foundation:
                  empowering individuals and communities with financial literacy
                  for a brighter future.
                  <br />
                  <br />
                  Financial knowledge is crucial for personal growth and
                  economic stability. Our goal is to provide accessible
                  financial education, fostering informed decisions and
                  combating poverty. We commit to using every donation
                  efficiently, focusing on high-quality educational content,
                  workshops, and reaching underserved communities with integrity
                  and transparency.
                  <br />
                  Your support is vital in realizing this vision. Through
                  financial literacy, we empower people to face challenges,
                  seize opportunities, and create a prosperous future. Every
                  dollar you contribute directly fuels our mission.
                  <br />
                  <br />
                  For any inquiries or to learn more about our commitment to
                  financial stewardship, please contact us (
                  <Link
                    className="underline text-lg hover:text-primary"
                    to="mailto:sriman@literacy-foundation.org"
                  >
                    sriman@literacy-foundation.org
                  </Link>
                  ,{" "}
                  <Link
                    className="underline text-lg hover:text-primary"
                    to="mailto:harita@literacy-foundation.org"
                  >
                    harita@literacy-foundation.org
                  </Link>
                  ).
                  <br />
                  <br />
                  Thank you for being a part of our journey.
                  <br />
                  <br />
                  Warm regards,
                  <br />
                  Sriman Katragadda Founder, $Literacy Foundation
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="./images/qr-code.png"
                  alt="Vision"
                  width={985}
                  height={985}
                  className="max-w-60 mb-8"
                />
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-primary to-supportive group-hover:from-supportive group-hover:to-primary hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 max-w-40">
                  <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white white:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Donate Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ReactPageScroller>
      <footer className="fixed flex flex-col items-center bottom-0 w-full !bg-primary bg-opacity-60 text-white">
        <ul className="flex my-2">
          <li className="mx-4">
            <Link to="/get-engaged">Get Engaged</Link>
          </li>
          <li className="mx-4">
            <Link to="/get-educated">Get Educated</Link>
          </li>
          <li className="mx-4">
            <Link to="/donate">Donate</Link>
          </li>
          <li className="mx-4">
            <Link to="/our-story">Our Story</Link>
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

export default DonatePage;
