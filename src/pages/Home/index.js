import React, { useState } from "react";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import ReactPageScroller from "react-page-scroller";

import IntroSection from "../../components/intro-section";

import { FaAngleDown, FaAngleLeft, FaPlay } from "react-icons/fa";
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

  // const getPagesNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= 4; i++) {
  //     pageNumbers.push(
  //       <Pagination.Item
  //         key={i}
  //         active={i === currentPage + 1}
  //         onSelect={(i) => handlePageChange(i)}
  //       >
  //         {i}
  //       </Pagination.Item>
  //     );
  //   }

  //   return [...pageNumbers];
  // };

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
        <div className="flex justify-center items-center h-screen pb-[72px]">
          <div className="container">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex items-center">
                <img
                  src="./images/purpose.jpg"
                  alt="Vision"
                  width={5507}
                  height={3370}
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
        <div className="flex justify-center items-center h-screen pb-[72px]">
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
        <div className="flex justify-center bg-[#88B9EB] text-white py-[50px]">
          <div className="container">
            <h2 className="text-center text-[50px] font-secondary font-bold mb-2">
              Get Engaged
            </h2>
            <p className="mb-20 text-center text-xl font-primary leading-normal">
              "Every little thing helps"
              <br />
              Join the Mission to Empower Through Financial Literacy!
              <br />
              Are you passionate about making a positive impact on individuals'
              lives?
              <br />
              Do you believe that financial literacy is a powerful tool for
              personal and societal growth?
              <br />f so, we invite you to be a part of our transformative
              mission.At the heart of our endeavor is a profound conviction that
              financial literacy is the key to unlocking a world of
              opportunities. We understand that informed financial choices are
              the cornerstone of prosperity and a brighter future for all. This
              is why we are reaching out to you, our potential volunteers, to
              help us drive change and make a real difference.
            </p>
            <div className="grid grid-cols-4 gap-6">
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Lifelong Journey
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  Our mission isn't a one-time endeavor. It's a lifelong
                  commitment to promoting financial understanding and
                  betterment. We're creating a movement that generations,
                  ensuring that financial literacy becomes an integral part of
                  people's lives.
                </p>
              </div>
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Global Reach
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  We're not just local heroes. We're global changemakers. By
                  harnessing cutting-edge technology and leveraging diverse
                  resources worldwide, we aim to break down geographical
                  barriers and ensure that everyone, regardless of their
                  location, has access to financial education.
                </p>
              </div>
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Combating Poverty
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  Financial literacy is a powerful weapon in the fight against
                  poverty. By equipping individuals with the skills and
                  knowledge they need to manage their finances effectively,
                  we're actively contributing to reducing poverty and fostering
                  economic stability in our communities.
                </p>
              </div>
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Inspiring Informed Choices
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  Our goal is to ignite a spark within individuals, inspiring
                  them to make informed financial decisions that lead to a
                  brighter future. We believe that by arming people with
                  knowledge, we can empower them to overcome financial
                  challenges and seize opportunities.
                </p>
              </div>
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Education for All Ages
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  We are committed to reaching both students and adults,
                  recognizing that financial literacy knows no age limits. Our
                  mission is to provide accessible, engaging, and informative
                  content that empowers individuals from all walks of life.
                </p>
              </div>
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Develop Your Skills
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  Whether you're interested in content creation, technology,
                  marketing, or community engagement, volunteering with us is an
                  opportunity to hone your skills and gain valuable experience.
                </p>
              </div>
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Make a Tangible Impact
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  You'll directly contribute to changing lives for the better,
                  helping individuals and communities become financially
                  resilient and prosperous
                </p>
              </div>
              <div className="p-10 mb-8 rounded-xl bg-white">
                <h2 className="text-[28px] text-[#88b9eb] font-secondary font-normal mb-2">
                  Work with a Global Team
                </h2>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-primary font-normal">
                  Join a diverse and dynamic team of like-minded individuals
                  from around the world, each bringing their unique skills and
                  perspectives to the table.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-[50px] pb-[200px] bg-[#f8f9fa]">
          <div className="container">
            <h2 className="mb-2 text-center text-[50px] text-[#88B9EB] font-secondary font-bold">
              Be Part of Something Bigger
            </h2>
            <p className="mb-12 text-center text-xl font-primary leading-normal text-[rgba(0,0,0,0.5)]">
              Our mission isn't just about financial literacy, it's about
              creating a brighter future for everyone.
              <br />
              Join us, and be part of a movement that's changing the world.
              <br />
              Together, we can light the path to prosperity and inspire informed
              choices that change lives.
              <br />
              Your skills, your passion, and your commitment can help us achieve
              our vision of a financially literate and empowered world.
              <br />
              To volunteer or learn more about how you can get involved, contact
              us today.
              <br />
              Together, we can turn the tide, one informed choice at a time.
              <br />
              #FinancialLiteracyMatters
            </p>
            <TinySlider
              settings={{
                lazyload: true,
                nav: false,
                mouseDrag: true,
              }}
            >
              <div key={0} className="bg-white rounded-xl pt-4 px-6 pb-12">
                <h2 className="text-[24px] text-[#88b9eb] font-secondary font-bold mb-5">
                  <Link to="/">Data Analysts</Link>
                </h2>
                <p>Responsibilities:</p>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    Analyze data to measure the impact of our programs, identify
                    areas for improvement, and provide insights for future
                    initiatives.
                  </li>
                  <li>
                    Skills: Data analysis, statistical analysis, and data
                    visualization.
                  </li>
                </ul>
                <Link to="/">
                  Learn More <FaAngleLeft />
                </Link>
              </div>
            </TinySlider>
          </div>
        </div>
      </ReactPageScroller>
      <footer className="fixed flex flex-col items-center bottom-0 w-full !bg-primary bg-opacity-60 text-white">
        <ul className="flex my-2">
          <li className="text-xl mx-4">
            <Link to="/">Get Engaged</Link>
          </li>
          <li className="text-xl mx-4">
            <Link to="/">Get Educated</Link>
          </li>
          <li className="text-xl mx-4">
            <Link to="/">Donate</Link>
          </li>
          <li className="text-xl mx-4">
            <Link to="/">About Us</Link>
          </li>
        </ul>
        <ul className="flex mb-2">
          <li className="text-sm mx-4">
            <p>Copyright © 2023 Literacy Foundation. All Rights Reserved.</p>
          </li>
          <li className="text-sm mx-4">
            <p>Privacy Policy</p>
          </li>
          <li className="text-sm mx-4">
            <p>Terms of service</p>
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default HomePage;
