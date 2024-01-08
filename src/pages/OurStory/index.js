import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";

const OurStoryPage = () => {
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
          <div className="container pt-12 h-full">
            <div className="flex items-center h-full py-16">
              <img
                src="./images/our-story.jpg"
                alt="Vision"
                width={6000}
                height={4000}
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <div className="container pt-12">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col py-6">
                <img
                  src="./images/our-story.jpg"
                  alt="Founder"
                  width={6000}
                  height={4000}
                  className="mb-12 rounded-lg"
                />
                <p className="text-2xl text-supportive leading-snug px-4 text-ellipsis text-center overflow-hidden">
                  Join in Empathy, Rise through Education – Together, we'll
                  harness technology to empower lives with financial literacy,
                  fostering collaboration and understanding.
                </p>
              </div>
              <div className="flex flex-col justify-center py-6">
                <video
                  src="./video/founder.mp4"
                  poster="./images/our-story.jpg"
                  className="object-cover h-full rounded-lg"
                  controls
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <div className="container pt-12">
            <img
              src="./images/our-story.jpg"
              alt="Founder"
              width={6000}
              height={4000}
              className="rounded-lg mr-8 mb-8 w-80 h-80 object-cover float-left"
            />
            <h3 className="text-3xl mb-8">Founders Message</h3>
            <p>
              I come before you today to share a story that has its roots in
              compassion, grew from a profound understanding of poverty's
              challenges, and embraced the transformative potential of
              technology in the journey towards financial empowerment.
              <br />
              It all began with a simple yet heart rending observation a stark
              reminder of the struggles faced by children going to public
              schools in economically disadvantaged areas, where basics like
              food, clothing, and proper shoes were often luxuries. This
              poignant moment led me to question why poverty persisted despite
              the abundance of resources in our world. The answer I discovered
              was multifaceted, but one key factor stood out lack of financial
              knowledge. This knowledge gap, coupled with a limited
              understanding of how to leverage available resources, compounded
              the issues faced by impoverished individuals and communities.
              <br />
              With this realization, our vision and mission began to
              crystallize. We envisioned a world where everyone, regardless of
              their background or circumstances, had access to the knowledge and
              tools needed to manage their finances wisely. We recognized that
              poverty was not just about material scarcity, it was equally about
              the absence of financial literacy.
              <br />
              As we embarked on our mission, we embraced technology as a
              powerful ally in our fight against poverty. We understood that in
              this digital age, technology could amplify our efforts and bring
              financial literacy to more people than ever before, including
              those going to public schools in economically disadvantaged areas.
              We sought to leverage technology to bridge the knowledge gap,
              making financial education accessible to even the most remote
              communities.
              <br />
              Our journey to eliminate poverty through technology enhanced
              financial literacy has been both challenging and immensely
              rewarding. Through digital platforms, online courses, and
              interactive apps, we have provided individuals with the tools they
              need to make informed financial decisions. Technology has allowed
              us to reach people in far flung regions, breaking down
              geographical barriers and ensuring that knowledge knows no bounds.
              <br />
              But our work goes beyond just technology. It is about instilling
              confidence, restoring hope, and fostering a sense of agency. It's
              about giving people the ability to leverage the resources
              available to them, both digital and physical, and unlock their
              full potential.
              <br />
              As we look ahead, our commitment to this cause remains steadfast.
              We are determined to harness the full potential of technology to
              expand our reach, touch more lives, and create lasting change in
              communities around the world, especially those with students going
              to public schools in economically disadvantaged areas. Our journey
              is far from over, and we invite you to join us in embracing
              technology as a force for good.
              <br />
              Thank you for believing in our mission, for standing alongside us,
              and for being the driving force behind our nonprofit's success.
              Together, we can continue to empower lives through
              technology-enhanced financial literacy, one person at a time.
              <br />
              <br />
              With heartfelt gratitude,
              <br />
              Sriman Katragadda
            </p>
          </div>
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
          <div className="container pt-12 h-full">
            <div className="flex items-center h-full py-16">
              <img
                src="./images/our-story.jpg"
                alt="Vision"
                width={6000}
                height={4000}
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <div className="container pt-12">
            <div className="grid grid-cols-3 gap-16">
              <div className="flex flex-col py-6">
                <h3 className="text-3xl text-center mb-8">Now</h3>
                <ul className="relative list-none ml-0 pl-5 text-xl list-plus">
                  <li className="before:absolute before:left-0">
                    Educate and bring the issue to light
                  </li>
                  <li className="before:absolute before:left-0">
                    Curate the content that is already available
                  </li>
                  <li className="before:absolute before:left-0">
                    Create the foundation
                  </li>
                  <li className="before:absolute before:left-0">
                    Enlist volunteers
                  </li>
                  <li className="before:absolute before:left-0">
                    Create programs focused on basics
                  </li>
                  <li className="before:absolute before:left-0">
                    Pilot the programs leveraging various outlets
                  </li>
                </ul>
              </div>
              <div className="flex flex-col py-6">
                <h3 className="text-3xl text-center mb-8">Next</h3>
                <ul className="relative list-none ml-0 pl-5 text-xl list-plus">
                  <li className="before:absolute before:left-0">
                    Engage with community leaders and volunteers to refine the
                    approach
                  </li>
                  <li className="before:absolute before:left-0">
                    Mobilize the activities with the volunteers
                  </li>
                </ul>
              </div>
              <div className="flex flex-col py-6">
                <h3 className="text-3xl text-center mb-8">Later</h3>
                <ul className="relative list-none ml-0 pl-5 text-xl list-plus">
                  <li className="before:absolute before:left-0">
                    Explore using AI models to start with curating the
                    content/classes based on the individual
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center items-center h-screen px-40 pb-16">
          <div className="container pt-12">
            <h3 className="text-xl font-bold mb-8">
              Disclaimer on Forward-Looking Statements and Future Plans
            </h3>
            <p className="text-xl">
              The information provided by Literacy-Foundation.org, including in
              our communications, updates, and presentations, often includes
              statements, estimates, projections, and expectations regarding our
              future plans and objectives. These are what are known as
              "forward-looking statements," which are not guarantees of future
              performance but are based on our current expectations,
              assumptions, estimates, and projections.
              <br />
              While we believe these forward-looking statements are reasonable,
              they are inherently uncertain and involve a number of risks and
              uncertainties beyond our control. Actual results and outcomes may
              differ materially from what is expressed or forecasted in such
              forward-looking statements. We undertake no obligation to publicly
              update or revise any forward-looking statements, whether as a
              result of new information, future events, or otherwise, except as
              required by law.
              <br />
              Please note that any future plans, objectives, or expectations
              disclosed on our website or in our communications are provided for
              general informational purposes only and should not be relied upon
              by donors, volunteers, or other stakeholders in making decisions
              related to their involvement or investment in our foundation's
              initiatives.
              <br />
              Our mission at Literacy-Foundation.org is pursued with integrity
              and a commitment to our core values, yet we must acknowledge the
              dynamic and changing nature of the work we engage in. We encourage
              our supporters and stakeholders to join us with an understanding
              of these uncertainties and a shared commitment to our cause.
              <br />
              This disclaimer aims to protect our foundation, its members,
              volunteers, donors, and all other stakeholders, ensuring that
              everyone is aware of the nature of our forward-looking statements
              and future plans.
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

export default OurStoryPage;
