import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import { FaPlay } from "react-icons/fa";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";
import MobileDropdown from "../../components/base/header/mobile-dropdown";

const HomePage = () => {
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
        <div className="flex relative items-center overflow-hidden h-screen">
          <img
            src="./images/image_1.jpg"
            alt="Intro Background"
            width={2656}
            height={1792}
            className="h-full object-cover"
          />
          <header className="hidden md:block absolute top-0 h-12 w-full !bg-primary bg-opacity-60 text-white">
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
          <header className="md:hidden absolute top-0 h-12 w-full !bg-primary bg-opacity-60 text-white">
            <div className="flex items-center">
              <div className="h-12 w-[42px] mr-auto">
                <img
                  src="./images/logo.png"
                  alt="Logo"
                  width={327}
                  height={373}
                />
              </div>
              <MobileDropdown />
            </div>
          </header>
          <div className="fixed bottom-4 mb-28 xs:mb-20 sm:mb-16 flex justify-center w-full">
            <div className="container">
              <p className="text-xl xs:text-2xl sm:text-3xl tracking-[0.055em] leading-normal xs:leading-none font-secondary text-white mb-10">
                Financial Literacy: The Keystone to Empowerment — Building
                Self-Sufficiency, Eradicating Poverty, Ending Hunger, and
                Cultivating Community Happiness.
              </p>
              <p className="flex items-center font-secondary text-white">
                <FaPlay className="mr-2" />
                Watch the video
              </p>
            </div>
          </div>
        </div>
        <div
          id="our-purpose"
          className="flex justify-center items-center h-screen pb-16"
        >
          <div className="container h-full flex items-center">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src="./images/purpose.jpg"
                  alt="Vision"
                  width={5325}
                  height={3878}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col flex-1 justify-center max-h-[50vh]">
                <h3 className="text-4xl mb-2">Our Purpose</h3>
                <p className="mb-6 sm:text-md md:text-xl text-supportive leading-tight sm:leading-normal">
                  Guided by an unwavering conviction that financial literacy is
                  the cornerstone of informed choices and prosperity, our
                  purpose is to leverage cutting-edge technology and a rich
                  tapestry of global resources. Our relentless mission is to
                  empower both learners and adults alike, transcending borders
                  and backgrounds, all with a deep sense of empathy.
                  <br />
                  Through captivating and easily accessible educational content
                  presented via dynamic videos and interactive websites, we are
                  committed to nurturing financial competence, kindling the
                  flames of informed decision-making, and combatting the shadows
                  of poverty with a profound understanding of the human
                  experience. Our overarching aim is to spark a lifelong odyssey
                  of financial enlightenment and empowerment, catalyzing a
                  brighter future for all through the transformative power of
                  empathy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="vision"
          className="flex justify-center items-center h-screen pb-16"
        >
          <div className="container">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center order-3 md:order-1">
                <h3 className="text-4xl mb-2">Our Vision</h3>
                <p className="mb-6 text-xl text-supportive leading-tight sm:leading-normal">
                  Our journey begins in the USA, from where we aim to spark a
                  global revolution in financial literacy. By equipping
                  individuals with the essential knowledge to make informed
                  decisions, we envision a world where economic self-sufficiency
                  eradicates poverty, fosters prosperity, and extinguishes
                  hunger. Through empowerment and education, we are committed to
                  ensuring no one is left behind, creating a future where
                  everyone can thrive.
                </p>
              </div>
              <div className="flex items-center order-2">
                <img
                  src="./images/vision.jpg"
                  alt="Vision"
                  width={5507}
                  height={3370}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </ReactPageScroller>
      <footer className="fixed flex flex-col justify-center items-center bottom-0 w-full !bg-primary bg-opacity-60 text-white">
        <ul className="flex flex-wrap my-2">
          <li className="mx-4 text-nowrap">
            <Link to="/get-engaged">Get Engaged</Link>
          </li>
          <li className="mx-4 text-nowrap">
            <Link to="/get-educated">Get Educated</Link>
          </li>
          <li className="mx-4 text-nowrap">
            <Link to="/donate">Donate</Link>
          </li>
          <li className="mx-4 text-nowrap">
            <Link to="/our-story">Our Story</Link>
          </li>
        </ul>
        <ul className="flex flex-wrap my-2">
          <li className="text-xs px-4 max-w-full">
            <p className="text-nowrap text-ellipsis overflow-hidden max-w-full">
              Copyright © 2023 Literacy Foundation. All Rights Reserved.
            </p>
          </li>
          <li className="text-xs px-4 text-nowrap">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="text-xs px-4 text-nowrap">
            <Link to="/terms-of-service">Terms of service</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default HomePage;
