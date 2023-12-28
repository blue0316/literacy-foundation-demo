import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import { FaAngleDown } from "react-icons/fa";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";

const GetEngagedPage = () => {
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
                  <li className="group relative mx-2">
                    <Link
                      to="/"
                      className="flex p-3 leading-6 text-nowrap items-center no-underline"
                    >
                      Home
                      <FaAngleDown className="ml-1" />
                    </Link>
                    <ul className="absolute rounded-lg py-5 opacity-0 invisible translate-y-1/2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition duration-300 bg-white min-w-44 text-black shadow-md">
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
          <div className="container">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex items-center">
                <img
                  src="./images/get-engaged.jpg"
                  alt="Vision"
                  width={5200}
                  height={3467}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-6 text-xl text-supportive leading-normal">
                  At the heart of our endeavor is a profound conviction that
                  financial literacy is the key to unlocking a world of
                  opportunities. We understand that informed financial choices
                  are the cornerstone of prosperity and a brighter future for
                  all. This is why we are reaching out to you, our potential
                  volunteers, to help us drive change and make a real
                  difference.
                </p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-primary to-supportive group-hover:from-supportive group-hover:to-primary hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 max-w-40">
                  <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white white:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Call for action
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen px-40 pb-16">
          <p className="text-3xl font-secondary text-supportive mb-16 leading-tight">
            Be a part of our mission to empower through financial literacy. As a
            volunteer, you'll help combat poverty and build resilient
            communities. Join us in this lifelong journey to make financial
            understanding a key part of every life, creating a brighter future
            for all generations. Let's transform lives together!
          </p>
          <div className="container">
            <div className="grid grid-cols-3 gap-16">
              <div className="group flex flex-col justify-start shadow-box">
                <div className="flex relative justify-center mb-6">
                  <img
                    src="./images/ge_engaged_1.jpg"
                    alt="Vision"
                    width={1024}
                    height={1024}
                    className="rounded-t-lg max-h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 group-hover:opacity-0 transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl mb-2 px-4">Education for All Ages</h3>
                <p className="text-xl text-supportive leading-snug px-4 pb-6">
                  We are committed to reaching both students and adults,
                  recognizing that financial literacy knows no age limits. Our
                  mission is to provide accessible, engaging, and informative
                  content that empowers individuals from all walks of life.
                </p>
              </div>
              <div className="group flex flex-col justify-start shadow-box">
                <div className="flex relative justify-center mb-6">
                  <img
                    src="./images/ge_engaged_2.jpg"
                    alt="Vision"
                    width={1024}
                    height={1024}
                    className="rounded-t-lg max-h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 group-hover:opacity-0 transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl mb-2 px-4">Develop Your Skills</h3>
                <p className="text-xl text-supportive leading-snug px-4 pb-6">
                  Whether you're interested in content creation, technology,
                  marketing, or community engagement, volunteering with us is an
                  opportunity to hone your skills and gain valuable experience.
                </p>
              </div>
              <div className="group flex flex-col justify-start shadow-box">
                <div className="flex relative justify-center mb-6">
                  <img
                    src="./images/ge_engaged_3.jpg"
                    alt="Vision"
                    width={1024}
                    height={1024}
                    className="rounded-t-lg max-h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 group-hover:opacity-0 transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl mb-2 px-4">
                  Inspiring Informed Choices
                </h3>
                <p className="text-xl text-supportive leading-snug px-4 pb-6">
                  Our goal is to ignite a spark within individuals, inspiring
                  them to make informed financial decisions that lead to a
                  brighter future. We believe that by arming people with
                  knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen px-40 pb-16">
          <p className="text-3xl font-secondary text-supportive mb-6 leading-none">
            Are you eager to make a real difference? Explore our diverse
            volunteer roles and find where your passion meets purpose! If you
            don't see a perfect fit, don't worry. Click here to connect with us,
            and we'll work together to find a meaningful way for you to
            contribute. Your skills and enthusiasm are exactly what we need to
            drive change!
          </p>
          <div className="container">
            <div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-3 bg-white mb-6">
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Content Creators
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Develop engaging and accessible educational content,
                    including videos, articles, and infographics, to promote
                    financial literacy.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Writing, video production, graphic design, and
                      storytelling.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-b border-gray-200 md:border-e dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Technology Wizards
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Leverage cutting-edge technology to create interactive
                    websites and platforms for disseminating financial education
                    materials.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Web development, app development, data analytics, and
                      UX/UI design.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Community Educators
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Organize workshops, seminars, and local events to provide
                    in-person financial education and engage with students and
                    adults in your community.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Public speaking, event planning, and teaching.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-r border-gray-200 dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Marketing and Outreach Champions
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Spread awareness of our mission through digital marketing,
                    social media campaigns, and outreach efforts.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Writing, video production, graphic design, and
                      storytelling.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-r border-gray-200 dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Finance Coaches and Mentors
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Provide one-on-one or group financial coaching and mentoring
                    sessions to individuals seeking guidance and support.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Financial planning, budgeting, and counseling.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-r border-gray-200 dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-primary">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Youth Ambassadors
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Engage with students and young adults to inspire an early
                    interest in financial literacy and help them develop
                    essential life skills. Skills you will have?
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Youth engagement, mentorship, and education.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-t border-r rounded-bl-lg border-gray-200 dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Marketing and Outreach Champions
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Spread awareness of our mission through digital marketing,
                    social media campaigns, and outreach efforts.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Writing, video production, graphic design, and
                      storytelling.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-t border-r border-gray-200 dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Finance Coaches and Mentors
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Provide one-on-one or group financial coaching and mentoring
                    sessions to individuals seeking guidance and support.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Financial planning, budgeting, and counseling.
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center px-4 py-2 text-center bg-white border-t border-r rounded-br-lg border-gray-200 dark:bg-primary !bg-opacity-95 hover:!bg-opacity-100 transition-all duration-300 dark:border-primary">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Youth Ambassadors
                </h3>
                <blockquote className="max-w-2xl mx-auto text-gray-500 mb-2 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What you will do?
                  </h3>
                  <p>
                    Engage with students and young adults to inspire an early
                    interest in financial literacy and help them develop
                    essential life skills. Skills you will have?
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="font-medium dark:text-white text-center rtl:text-right ms-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      <span className="text-white font-bold">
                        Skills you will have:{" "}
                      </span>
                      Youth engagement, mentorship, and education.
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex justify-center">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 text-black dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  Join the team to make the difference
                </span>
              </button>
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

export default GetEngagedPage;
