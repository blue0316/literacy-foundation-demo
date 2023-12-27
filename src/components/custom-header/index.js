import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

import "@fontsource/roboto/500.css";

const CustomHeader = () => {
  return (
    <div className="container absolute flex top-0 left-1/2 -translate-x-1/2 z-10">
      <div className="flex w-full justify-center">
        <header className="items-center w-full flex justify-center text-white font-primary">
          <div className="relative h-12">
            <div className="absolute h-12 w-[42px]">
              <img
                src="./images/logo.png"
                alt="Logo"
                width={327}
                height={373}
              />
            </div>
          </div>
          <div className="w-full flex flex-1 justify-left">
            <ul className="flex justify-center items-center h-14 bg-primary">
              <li className="group relative">
                <Link to="/" className="flex p-3 leading-6 text-nowrap items-center">
                  Home
                  <FaAngleDown className="ml-1" />
                </Link>
                <ul className="absolute rounded-lg py-5 opacity-0 invisible translate-y-1/4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition duration-300 bg-white min-w-44 text-black">
                  <li className="py-1 px-5">
                    <Link to="/" className="text-sm">
                      Our Purpose
                    </Link>
                  </li>
                  <li className="py-1 px-5">
                    <Link to="/" className="text-sm">
                      Vision
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about-us" className="p-3 leading-6 text-nowrap">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/get-engaged" className="p-3 leading-6 text-nowrap">
                  Get Engaged
                </Link>
              </li>
              <li>
                <Link to="/get-educated" className="p-3 leading-6 text-nowrap">
                  Get Educated
                </Link>
              </li>
              <li>
                <Link
                  to="/we-have-to-tell-you"
                  className="p-3 leading-6 text-nowrap"
                >
                  We have to tell you
                </Link>
              </li>
              <li>
                <Link to="/donate" className="p-3 leading-6 text-nowrap">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="p-3 leading-6 text-nowrap">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default CustomHeader;
