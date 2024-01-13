import React from "react";
import { Link } from "react-router-dom";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";
import MobileDropdown from "../../components/base/header/mobile-dropdown";

const ContactPage = () => {
  return (
    <main>
      <div className="relative flex justify-center items-center h-screen px-4 md:px-0 pb-16">
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
        <div className="w-full md:container">
          <div className="md:grid md:grid-cols-2 md:gap-12">
            <div className="flex items-center pb-4 md:pb-0">
              <img
                src="./images/contact-us.jpg"
                alt="Vision"
                width={5376}
                height={3584}
                className="rounded-lg max-h-[50vh]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <a href="mailto:harita@literacy-foundation.org" className="pb-2 text-xl xs:text-3xl md:text-2xl lg:text-3xl text-nowrap hover:underline hover:text-primart">
                harita@literacy-foundation.org{" "}
              </a>
              <Link to="/donate" className="hvoer">Please Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
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

export default ContactPage;
