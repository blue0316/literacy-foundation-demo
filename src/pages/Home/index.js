import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import IntroSection from "../../components/intro-section";

import { FaAngleDown, FaPlay } from "react-icons/fa";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";

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
        <IntroSection>
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
                  <li className="group relative mx-2">
                    <Link
                      to="/"
                      className="flex p-3 leading-6 text-nowrap items-center no-underline"
                    >
                      Home
                      <FaAngleDown className="ml-1" />
                    </Link>
                    <ul className="absolute rounded-lg py-5 opacity-0 invisible translate-y-1/2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition duration-300 bg-white min-w-44 text-black">
                      <li className="py-1 px-5">
                        <Link to="/#our-purpose" className="text-sm">
                          Our Purpose
                        </Link>
                      </li>
                      <li className="py-1 px-5">
                        <Link to="/#vision" className="text-sm">
                          Vision
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mx-2">
                    <Link to="/about-us" className="p-3 leading-6 text-nowrap">
                      About Us
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
                    <Link
                      to="/we-have-to-tell-you"
                      className="p-3 leading-6 text-nowrap"
                    >
                      We have to tell you
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
          <div className="fixed bottom-4 mb-16 flex justify-center w-full">
            <div className="container">
              <p className="text-3xl tracking-[0.055em] leading-none font-secondary text-white mb-10">
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
        </IntroSection>
        <div id="our-purpose" className="flex justify-center items-center h-screen pb-16">
          <div className="container">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex items-center">
                <img
                  src="./images/purpose.jpg"
                  alt="Vision"
                  width={5325}
                  height={3878}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl mb-2">Our Purpose</h3>
                <p className="mb-6 text-xl text-supportive leading-normal">
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
        <div id="vision" className="flex justify-center items-center h-screen pb-16">
          <div className="container">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl mb-2">Our Vision</h3>
                <p className="mb-6 text-xl text-supportive leading-normal">
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
              <div className="flex items-center">
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
            <Link to="/">About Us</Link>
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

export default HomePage;
