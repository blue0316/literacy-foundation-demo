import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";

const GetEducatedPage = () => {
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
          <div className="container pt-12 h-full">
            <div className="flex items-center h-full py-16">
              <img
                src="./images/get_educated.jpg"
                alt="Vision"
                width={5200}
                height={3750}
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <p className="text-3xl font-secondary text-supportive mb-16 leading-tight">
            Unveiling the Hidden Deficit: Tackling America's Financial Literacy
            Challenge
          </p>
          <div className="container">
            <div className="grid grid-cols-3 gap-16">
              <div className="group flex flex-col text-center shadow-box py-6">
                <h3 className="text-2xl mb-2 px-4">~$ 435 Billion</h3>
                <p className="text-xl text-supportive leading-snug px-4">
                  Annual Cost of Financial Illiteracy
                </p>
              </div>
              <div className="group flex flex-col text-center shadow-box py-6">
                <h3 className="text-2xl mb-2 px-4">27 out of 50 states</h3>
                <p className="text-xl text-supportive leading-snug px-4">
                  Lack mandatory financial education in schools
                </p>
              </div>
              <div className="group flex flex-col text-center shadow-box py-6">
                <h3 className="text-2xl mb-2 px-4">~$ 300 Billion</h3>
                <p className="text-xl text-supportive leading-snug px-4">
                  4 out of 5 workers admit they spent time worrying about
                  finances during work day
                </p>
              </div>
            </div>
          </div>
          <div className="container pt-12">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col py-6">
                <ul className="text-xl text-supportive leading-snug px-4 text-ellipsis overflow-hidden">
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.ramseysolutions.com/financial-literacy/financial-literacy-crisis-in-america"
                    >
                      The Financial Literacy Crisis in America: 2023 Report By
                      Ramsey
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.forbes.com/sites/yassprize/2023/04/12/the-perils-of-not-investing-in-financial-literacy/?sh=45e566085ab5"
                    >
                      The Perils Of Not Investing In Financial Literacy
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.cnbc.com/2023/01/19/heres-how-much-people-say-lack-of-financial-literacy-cost-in-2022.html"
                    >
                      Lack of financial literacy cost 15% of adults at least
                      $10,000 in 2022. Here’s how the rest fared
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col py-6">
                <ul className="text-xl text-supportive leading-snug px-4 text-ellipsis overflow-hidden">
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.bankrate.com/banking/how-lack-of-financial-literacy-could-cost-thousands/#:~:text=Whether%20it%27s%20lack%20of%20knowledge,score%20and%20difficulty%20borrowing%20money"
                    >
                      How a lack of financial literacy could be costing you
                      thousands
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.ifac.org/knowledge-gateway/contributing-global-economy/discussion/cost-financialilliteracy#:~:text=Higher%20debt%20and%20bankruptcy%20rates,effects%20on%20the%20financial%20system"
                    >
                      The Cost of Financial Illiteracy by LINDA LACH, DARLENE
                      NZORUBARA
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://time.com/6186290/americans-financial-literacy/"
                    >
                      Financial Literacy Education Could Help Millions of
                      Americans
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            className="absolute bottom-0 text-xs right-2 pb-2 mb-16"
            onClick={() => setCurrentPage(6)}
          >
            Disclaimer: External Content and Resources
          </button>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <p className="absolute top-0 text-3xl flex items-center font-secondary text-supportive leading-tight h-12">
            "Empowering Minds, Enriching Futures: Your Gateway to Financial
            Knowledge"
          </p>
          <div className="container pt-12">
            <h3 className="text-3xl mb-8">Focus area: Personal Finance</h3>
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col py-6">
                <div className="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="168"
                    height="168"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="podcast"
                  >
                    <path
                      fill="url(#paint0_linear_2535_6960)"
                      d="M10.8372 10.5455C10.8372 10.1438 10.5248 9.81818 10.1395 9.81818H8.58141C8.90462 8.15837 10.3124 6.90909 12 6.90909C13.6876 6.90909 15.0954 8.15837 15.4186 9.81818H12.9302C12.5449 9.81818 12.2326 10.1438 12.2326 10.5455C12.2326 10.9471 12.5449 11.2727 12.9302 11.2727H15.4884V12.7273H12.9302C12.5449 12.7273 12.2326 13.0529 12.2326 13.4545C12.2326 13.8562 12.5449 14.1818 12.9302 14.1818H15.4186C15.1411 15.6066 14.0645 16.7289 12.6977 17.0182V19.2727C12.6977 19.6744 12.3853 20 12 20C11.6147 20 11.3023 19.6744 11.3023 19.2727V17.0182C9.93549 16.7289 8.85886 15.6066 8.58141 14.1818H10.1395C10.5248 14.1818 10.8372 13.8562 10.8372 13.4545C10.8372 13.0529 10.5248 12.7273 10.1395 12.7273H8.51163V11.2727H10.1395C10.5248 11.2727 10.8372 10.9471 10.8372 10.5455Z"
                    ></path>
                    <path
                      fill="url(#paint1_linear_2535_6960)"
                      d="M12 4C8.67054 4 5.94634 6.70128 5.73422 10.1161C5.38211 9.92573 4.98218 9.81818 4.55814 9.81818C3.14532 9.81818 2 11.0121 2 12.4848V14.4242C2 15.897 3.14532 17.0909 4.55814 17.0909C4.60616 17.0909 4.65388 17.0895 4.70125 17.0868V17.0909C6.03503 17.0909 7.11628 15.9638 7.11628 14.5734V10.5454C7.11628 7.73382 9.30279 5.45455 12 5.45455C14.6972 5.45455 16.8837 7.73382 16.8837 10.5454V14.5734C16.8837 15.9638 17.9649 17.0909 19.2987 17.0909V17.0868C19.3461 17.0895 19.3938 17.0909 19.4419 17.0909C20.8547 17.0909 22 15.897 22 14.4242V12.4848C22 11.0121 20.8547 9.81818 19.4419 9.81818C19.0178 9.81818 18.6179 9.92574 18.2657 10.1161C18.0536 6.70129 15.3294 4 12 4Z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2535_6960"
                        x1="12"
                        x2="12"
                        y1="4"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#854D9C"></stop>
                        <stop offset="1" stop-color="#CD4ED3"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2535_6960"
                        x1="12"
                        x2="12"
                        y1="4"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#854D9C"></stop>
                        <stop offset="1" stop-color="#CD4ED3"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.npr.org/podcasts/510289/planet-money"
                    >
                      Planet Money
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.ramseysolutions.com/shows"
                    >
                      Ramsey show
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://podcast.farnoosh.tv"
                    >
                      Farnoosh Torabi
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://brownambitionpodcast.com/about/"
                    >
                      Brown ambition podcast
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      className="group-hover:text-primary"
                      to="https://yoquierodineropodcast.com/podcast/"
                    >
                      Yo Quiero Dinero
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col py-6">
                <div className="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="168"
                    height="168"
                    id="book"
                  >
                    <g data-name="Book-notebook">
                      <rect
                        width="58"
                        height="40"
                        x="3"
                        y="15"
                        fill="#007579"
                      ></rect>
                      <path
                        fill="#ff6243"
                        d="M32,55a4,4,0,0,0-4-4H7V11H18V47h6A8,8,0,0,1,32,55Z"
                      ></path>
                      <path
                        fill="#ffa733"
                        d="M57,11V51H36a4,4,0,0,0-4,4V15a4,4,0,0,1,4-4Z"
                      ></path>
                      <path
                        fill="#ffdaaa"
                        d="M32,15V55a8,8,0,0,0-8-8H18V7h6A8,8,0,0,1,32,15Z"
                      ></path>
                      <polygon
                        fill="#006df0"
                        points="17 51 17 59 14 56 11 59 11 51 17 51"
                      ></polygon>
                      <rect
                        width="6"
                        height="8"
                        x="47"
                        y="51"
                        fill="#46f8ff"
                      ></rect>
                      <polygon
                        fill="#ffda44"
                        points="53 11 53 26 48 22 43 26 43 11 53 11"
                      ></polygon>
                      <rect
                        width="6"
                        height="1"
                        x="47"
                        y="51"
                        fill="#00d7df"
                      ></rect>
                      <rect
                        width="6"
                        height="1"
                        x="11"
                        y="51"
                        fill="#005ece"
                      ></rect>
                    </g>
                  </svg>
                </div>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="group pb-4">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.npr.org/podcasts/510289/planet-money"
                    >
                      Planet Money
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="pb-4">
                    'Personal Finance QuickStart Guide: The Simplified
                    Beginner’s Guide to Eliminating Financial Stress, Building
                    Wealth, and Achieving Financial Freedom' by Morgen Rochard
                  </li>
                  <li className="pb-4">
                    When She Makes More: 10 Rules for Breadwinning Women{" "}
                    <span className="text-gray-400 text-nowrap">
                      By Farnoosh Torabi
                    </span>
                  </li>
                  <li className="pb-4">
                    I Will Teach You to Be Rich By Ramit Sethi
                  </li>
                  <li>
                    Women’s Worth: Finding Your Financial Confidence By Eleanor
                    Blayney
                  </li>
                  <li>
                    The Black Girl's Guide to Financial Freedom: Build Wealth,
                    Retire Early, and Live the Life of Your Dreams
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <h3 className="text-2xl mt-8">
            Submit your favorite podcast or book on personal finance
          </h3>
          <button
            className="absolute bottom-0 text-xs right-2 pb-2 mb-16"
            onClick={() => setCurrentPage(6)}
          >
            Disclaimer: External Content and Resources
          </button>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <p className="absolute top-0 text-3xl flex items-center font-secondary text-supportive leading-tight h-12">
            "Empowering Minds, Enriching Futures: Your Gateway to Financial
            Knowledge"
          </p>
          <div className="container pt-12">
            <h3 className="text-3xl mb-8">Focus area: Investments</h3>
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col py-6">
                <div className="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="168"
                    height="168"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="podcast"
                  >
                    <path
                      fill="url(#paint0_linear_2535_6960)"
                      d="M10.8372 10.5455C10.8372 10.1438 10.5248 9.81818 10.1395 9.81818H8.58141C8.90462 8.15837 10.3124 6.90909 12 6.90909C13.6876 6.90909 15.0954 8.15837 15.4186 9.81818H12.9302C12.5449 9.81818 12.2326 10.1438 12.2326 10.5455C12.2326 10.9471 12.5449 11.2727 12.9302 11.2727H15.4884V12.7273H12.9302C12.5449 12.7273 12.2326 13.0529 12.2326 13.4545C12.2326 13.8562 12.5449 14.1818 12.9302 14.1818H15.4186C15.1411 15.6066 14.0645 16.7289 12.6977 17.0182V19.2727C12.6977 19.6744 12.3853 20 12 20C11.6147 20 11.3023 19.6744 11.3023 19.2727V17.0182C9.93549 16.7289 8.85886 15.6066 8.58141 14.1818H10.1395C10.5248 14.1818 10.8372 13.8562 10.8372 13.4545C10.8372 13.0529 10.5248 12.7273 10.1395 12.7273H8.51163V11.2727H10.1395C10.5248 11.2727 10.8372 10.9471 10.8372 10.5455Z"
                    ></path>
                    <path
                      fill="url(#paint1_linear_2535_6960)"
                      d="M12 4C8.67054 4 5.94634 6.70128 5.73422 10.1161C5.38211 9.92573 4.98218 9.81818 4.55814 9.81818C3.14532 9.81818 2 11.0121 2 12.4848V14.4242C2 15.897 3.14532 17.0909 4.55814 17.0909C4.60616 17.0909 4.65388 17.0895 4.70125 17.0868V17.0909C6.03503 17.0909 7.11628 15.9638 7.11628 14.5734V10.5454C7.11628 7.73382 9.30279 5.45455 12 5.45455C14.6972 5.45455 16.8837 7.73382 16.8837 10.5454V14.5734C16.8837 15.9638 17.9649 17.0909 19.2987 17.0909V17.0868C19.3461 17.0895 19.3938 17.0909 19.4419 17.0909C20.8547 17.0909 22 15.897 22 14.4242V12.4848C22 11.0121 20.8547 9.81818 19.4419 9.81818C19.0178 9.81818 18.6179 9.92574 18.2657 10.1161C18.0536 6.70129 15.3294 4 12 4Z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2535_6960"
                        x1="12"
                        x2="12"
                        y1="4"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#854D9C"></stop>
                        <stop offset="1" stop-color="#CD4ED3"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2535_6960"
                        x1="12"
                        x2="12"
                        y1="4"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#854D9C"></stop>
                        <stop offset="1" stop-color="#CD4ED3"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.npr.org/podcasts/510289/planet-money"
                    >
                      Planet Money
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://www.ramseysolutions.com/shows"
                    >
                      Ramsey show
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://podcast.farnoosh.tv"
                    >
                      Farnoosh Torabi
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://brownambitionpodcast.com/about/"
                    >
                      Brown ambition podcast
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      className="group-hover:text-primary"
                      to="https://yoquierodineropodcast.com/podcast/"
                    >
                      Yo Quiero Dinero
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col py-6">
                <div className="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="168"
                    height="168"
                    id="book"
                  >
                    <g data-name="Book-notebook">
                      <rect
                        width="58"
                        height="40"
                        x="3"
                        y="15"
                        fill="#007579"
                      ></rect>
                      <path
                        fill="#ff6243"
                        d="M32,55a4,4,0,0,0-4-4H7V11H18V47h6A8,8,0,0,1,32,55Z"
                      ></path>
                      <path
                        fill="#ffa733"
                        d="M57,11V51H36a4,4,0,0,0-4,4V15a4,4,0,0,1,4-4Z"
                      ></path>
                      <path
                        fill="#ffdaaa"
                        d="M32,15V55a8,8,0,0,0-8-8H18V7h6A8,8,0,0,1,32,15Z"
                      ></path>
                      <polygon
                        fill="#006df0"
                        points="17 51 17 59 14 56 11 59 11 51 17 51"
                      ></polygon>
                      <rect
                        width="6"
                        height="8"
                        x="47"
                        y="51"
                        fill="#46f8ff"
                      ></rect>
                      <polygon
                        fill="#ffda44"
                        points="53 11 53 26 48 22 43 26 43 11 53 11"
                      ></polygon>
                      <rect
                        width="6"
                        height="1"
                        x="47"
                        y="51"
                        fill="#00d7df"
                      ></rect>
                      <rect
                        width="6"
                        height="1"
                        x="11"
                        y="51"
                        fill="#005ece"
                      ></rect>
                    </g>
                  </svg>
                </div>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="pb-4">
                    The Intelligent Investor Rev Ed.: The Definitive Book on
                    Value Investing by  Benjamin Graham  (Author), Jason Zweig 
                    (Author), Warren E. Buffett  (Collaborator)
                  </li>
                  <li className="pb-4">
                    The Bogleheads’ Guide to Investing (2nd ed.)
                    <span className="text-gray-400 text-nowrap">
                      {" "}
                      By Mel Lindauer, Michael LeBoeuf and Taylor
                    </span>
                  </li>
                  <li className="pb-4">
                    The Millionaire Next Door: The Surprising Secrets of
                    America’s Wealthy By Thomas J. Stanley
                  </li>
                  <li className="pb-4">
                    A Random Walk Down Wall Street: The Best Investment Guide
                    That Money Can Buy' by Burton G. Malkiel
                  </li>
                  <li>
                    The Psychology of Money: Timeless lessons on wealth, greed,
                    and happiness by Morgan Housel 
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <h3 className="text-2xl mt-8">
            Submit your favorite podcast or book on investments
          </h3>
          <button
            className="absolute bottom-0 text-xs right-2 pb-2 mb-16"
            onClick={() => setCurrentPage(6)}
          >
            Disclaimer: External Content and Resources
          </button>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <p className="absolute top-0 text-3xl flex items-center font-secondary text-supportive leading-tight h-12">
            "Empowering Minds, Enriching Futures: Your Gateway to Financial
            Knowledge"
          </p>
          <div className="container pt-12">
            <h3 className="text-3xl mb-8">Focus area: Money Policy</h3>
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col py-6">
                <div className="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="168"
                    height="168"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="podcast"
                  >
                    <path
                      fill="url(#paint0_linear_2535_6960)"
                      d="M10.8372 10.5455C10.8372 10.1438 10.5248 9.81818 10.1395 9.81818H8.58141C8.90462 8.15837 10.3124 6.90909 12 6.90909C13.6876 6.90909 15.0954 8.15837 15.4186 9.81818H12.9302C12.5449 9.81818 12.2326 10.1438 12.2326 10.5455C12.2326 10.9471 12.5449 11.2727 12.9302 11.2727H15.4884V12.7273H12.9302C12.5449 12.7273 12.2326 13.0529 12.2326 13.4545C12.2326 13.8562 12.5449 14.1818 12.9302 14.1818H15.4186C15.1411 15.6066 14.0645 16.7289 12.6977 17.0182V19.2727C12.6977 19.6744 12.3853 20 12 20C11.6147 20 11.3023 19.6744 11.3023 19.2727V17.0182C9.93549 16.7289 8.85886 15.6066 8.58141 14.1818H10.1395C10.5248 14.1818 10.8372 13.8562 10.8372 13.4545C10.8372 13.0529 10.5248 12.7273 10.1395 12.7273H8.51163V11.2727H10.1395C10.5248 11.2727 10.8372 10.9471 10.8372 10.5455Z"
                    ></path>
                    <path
                      fill="url(#paint1_linear_2535_6960)"
                      d="M12 4C8.67054 4 5.94634 6.70128 5.73422 10.1161C5.38211 9.92573 4.98218 9.81818 4.55814 9.81818C3.14532 9.81818 2 11.0121 2 12.4848V14.4242C2 15.897 3.14532 17.0909 4.55814 17.0909C4.60616 17.0909 4.65388 17.0895 4.70125 17.0868V17.0909C6.03503 17.0909 7.11628 15.9638 7.11628 14.5734V10.5454C7.11628 7.73382 9.30279 5.45455 12 5.45455C14.6972 5.45455 16.8837 7.73382 16.8837 10.5454V14.5734C16.8837 15.9638 17.9649 17.0909 19.2987 17.0909V17.0868C19.3461 17.0895 19.3938 17.0909 19.4419 17.0909C20.8547 17.0909 22 15.897 22 14.4242V12.4848C22 11.0121 20.8547 9.81818 19.4419 9.81818C19.0178 9.81818 18.6179 9.92574 18.2657 10.1161C18.0536 6.70129 15.3294 4 12 4Z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2535_6960"
                        x1="12"
                        x2="12"
                        y1="4"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#854D9C"></stop>
                        <stop offset="1" stop-color="#CD4ED3"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2535_6960"
                        x1="12"
                        x2="12"
                        y1="4"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#854D9C"></stop>
                        <stop offset="1" stop-color="#CD4ED3"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="group mb-8">
                    <Link
                      className="break-words group-hover:text-primary"
                      to="https://www.goldmansachs.com/intelligence/series/goldman-sachs-exchanges/index.html?chl=ps&plt=go&cid=20314087364&agp=156316992208&kid=economics%20podcast&mtype=p&gclid=EAIaIQobChMI0YaircywgwMV3GJHAR0p2QrhEAAYBCAAEgIw-_D_BwE&gclsrc=aw.ds"
                    >
                      Goldman Sachs
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://podcasts.apple.com/us/podcast/macro-musings-with-david-beckworth/id1099277290"
                    >
                      Macro Musings by David Beckworth
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://economicsdetective.com/category/podcast/"
                    >
                      Economicsdetective Hosted by Garrett Petersen
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col py-6">
                <div className="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="168"
                    height="168"
                    id="book"
                  >
                    <g data-name="Book-notebook">
                      <rect
                        width="58"
                        height="40"
                        x="3"
                        y="15"
                        fill="#007579"
                      ></rect>
                      <path
                        fill="#ff6243"
                        d="M32,55a4,4,0,0,0-4-4H7V11H18V47h6A8,8,0,0,1,32,55Z"
                      ></path>
                      <path
                        fill="#ffa733"
                        d="M57,11V51H36a4,4,0,0,0-4,4V15a4,4,0,0,1,4-4Z"
                      ></path>
                      <path
                        fill="#ffdaaa"
                        d="M32,15V55a8,8,0,0,0-8-8H18V7h6A8,8,0,0,1,32,15Z"
                      ></path>
                      <polygon
                        fill="#006df0"
                        points="17 51 17 59 14 56 11 59 11 51 17 51"
                      ></polygon>
                      <rect
                        width="6"
                        height="8"
                        x="47"
                        y="51"
                        fill="#46f8ff"
                      ></rect>
                      <polygon
                        fill="#ffda44"
                        points="53 11 53 26 48 22 43 26 43 11 53 11"
                      ></polygon>
                      <rect
                        width="6"
                        height="1"
                        x="47"
                        y="51"
                        fill="#00d7df"
                      ></rect>
                      <rect
                        width="6"
                        height="1"
                        x="11"
                        y="51"
                        fill="#005ece"
                      ></rect>
                    </g>
                  </svg>
                </div>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="pb-4">
                    A Monetary History of the United States, 1867-1960" by Anna
                    Schwartz & Milton Friedman
                  </li>
                  <li className="pb-4">
                    "The General Theory of Employment, Interest, and Money" by
                    John Maynard Keynes
                  </li>
                  <li className="pb-4">
                    "Money Mischief: Episodes in Monetary History" by Milton
                    Friedman
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <h3 className="text-2xl mt-8">
            Submit your favorite podcast or book on money policy
          </h3>
          <button
            className="absolute bottom-0 text-xs right-2 pb-2 mb-16"
            onClick={() => setCurrentPage(6)}
          >
            Disclaimer: External Content and Resources
          </button>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pt-12 pb-16">
          <p className="absolute top-0 text-3xl flex items-center font-secondary text-supportive leading-tight h-12">
            "Empowering Minds, Enriching Futures: Your Gateway to Financial
            Knowledge"
          </p>
          <div className="container pt-12">
            <h3 className="text-3xl mb-12">Learn from the investment Gurus</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col py-6">
                <h3 className="text-2xl mb-6">Warren Buffet Image</h3>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/6JLoU1BRdeE?si=1l9ZDeEUdTgshcKr"
                    >
                      Investment Advice at Georgetown
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/AnDRZBwPMuw?si=1zirnMUWNGOX_L3e"
                    >
                      Power of compounding
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/Tr6MMsoWAog?si=c8dQFjW1QAnA4IVO"
                    >
                      Advice on becoming successful
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col py-6">
                <h3 className="text-2xl mb-6">Bill Ackman image</h3>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/WEDIj9JBTC8?si=eKbLuIHWONqj_vIr"
                    >
                      Everything You Need to Know About Finance and Investing in
                      Under an Hour
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/AnDRZBwPMuw?si=1zirnMUWNGOX_L3e"
                    >
                      Learn from mistakes
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/Tr6MMsoWAog?si=c8dQFjW1QAnA4IVO"
                    >
                      Rules For Investing Like a Maverick
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col py-6">
                <h3 className="text-2xl mb-6">Thasuda Brown image</h3>
                <ol
                  className="text-xl text-supportive leading-snug px-4"
                  style={{ listStyleType: "decimal" }}
                >
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/kAYLd8z44b8?si=e8XSrcJPcLDoW1yE"
                    >
                      Investing during bear market
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="group mb-8">
                    <Link
                      className="group-hover:text-primary"
                      to="https://youtu.be/s0H1jxF5TWQ?si=yOXmrnBPRajfKzwF"
                    >
                      6 ways to improve your relationship with money
                      <div className="inline-block relative">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          width="18px"
                          height="18px"
                          viewBox="0 0 442.246 442.246"
                          className="absolute -bottom-1 left-1 fill-supportive group-hover:fill-primary transition-all duration-300"
                        >
                          <g>
                            <g>
                              <path
                                d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z"
                              />
                              <path
                                d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <h3 className="text-2xl mt-8">
            Send your Favorite guru on investments
          </h3>
          <button
            className="absolute bottom-0 text-xs right-2 pb-2 mb-16"
            onClick={() => setCurrentPage(6)}
          >
            Disclaimer: External Content and Resources
          </button>
        </div>
        <div className="flex relative justify-center items-center h-screen pb-16">
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
          <div className="container pt-12 h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl text-left w-full pb-12 m-0">
              Disclaimer: External Content and Resources
            </h2>
            <p className="">
              The literacy-foundation.org website provides links to various
              external websites, articles, podcasts, and other resources created
              and maintained by third parties, both non-profit and for-profit
              entities, as well as government agencies. These links are provided
              solely for the convenience and educational enrichment of our
              users.
              <br />
              <b>Please Note:</b>
              <br />
              <b>1. No Endorsement: </b>
              The inclusion of external content does not constitute or imply an
              endorsement, recommendation, or favoring by
              literacy-foundation.org. The views and opinions expressed in any
              linked content do not necessarily reflect those of
              literacy-foundation.org or its staff.
              <br />
              <b>2. No Affiliation:</b>
              <br />
              literacy-foundation.org is not affiliated with the creators of the
              external resources, and our listing of these links should not be
              interpreted as an association or partnership.
              <br />
              <b>3. Accuracy and Reliability:</b>
              <br />
              While we strive to provide only quality links to useful and
              ethical websites, we have no control over the content and nature
              of these external sites. The content may change without notice,
              and may occur before we have the opportunity to remove a link
              which may have gone 'bad' or become outdated.
              <br />
              <b>4. Risk and Responsibility:</b>
              <br />
              Users are advised to exercise their own due diligence regarding
              the accuracy, reliability, and usefulness of any information
              provided on these external sites. literacy-foundation.org will not
              be liable for any losses and/or damages in connection with the use
              of our website’s linked resources.
              <br />
              <b>5. Updates and Changes:</b>
              <br />
              literacy-foundation.org reserves the right to make changes to this
              disclaimer at any time and encourages visitors to frequently check
              this page for any changes. Your use of any information or
              materials on this website is entirely at your own risk, for which
              we shall not be liable. It is your own responsibility to ensure
              that any products, services, or information available through this
              website meet your specific requirements.
              <br />
              <b>Contact Us</b>
              <br />
              If you have any concerns or questions about this disclaimer, or if
              you find that any link on our site is inappropriate, please feel
              free to contact us at{" "}
              <Link
                className="underline hover:text-primary"
                to="mailto:webadmin@literacy-foundation.org"
              >
                webadmin@literacy-foundation.org
              </Link>
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

export default GetEducatedPage;
