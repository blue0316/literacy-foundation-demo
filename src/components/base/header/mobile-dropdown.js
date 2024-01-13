import React, { useState, useEffect, useRef } from "react";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileDropdown = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to close dropdown when clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropdownClick = () => {
    setShow(!show);
  };

  return (
    <div
      ref={dropdownRef}
      className="group flex justify-center items-center h-12 w-12 relative bg-primary hover:brightness-125 transition-all  duration-200"
      onClick={handleDropdownClick}
    >
      <FaList />
      <div
        className={
          show
            ? "absolute top-full right-0 w-32 bg-primary group-hover:brightness-[0.8] transition-all  duration-300 border-t-4 border-white visible opacity-100 translate-y-0"
            : "absolute top-full right-0 w-32 bg-primary group-hover:brightness-[0.8] transition-all  duration-300 border-t-4 border-white invisible opacity-0 translate-y-8"
        }
      >
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-white hover:bg-opacity-25 transition-all duration-200">
            <Link
              to="/"
              className="flex leading-6 text-nowrap items-center no-underline"
            >
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-white hover:bg-opacity-25 transition-all duration-200">
            <Link to="/our-story" className="leading-6 text-nowrap">
              Our Story
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-white hover:bg-opacity-25 transition-all duration-200">
            <Link to="/get-engaged" className="leading-6 text-nowrap">
              Get Engaged
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-white hover:bg-opacity-25 transition-all duration-200">
            <Link to="/get-educated" className="leading-6 text-nowrap">
              Get Educated
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-white hover:bg-opacity-25 transition-all duration-200">
            <Link to="/donate" className="leading-6 text-nowrap">
              Donate
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-white hover:bg-opacity-25 transition-all duration-200">
            <Link to="/contact-us" className="leading-6 text-nowrap">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileDropdown;
