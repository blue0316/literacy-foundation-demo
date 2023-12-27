import React from "react";

const IntroSection = ({ children }) => {
  return (
    <div className="flex relative items-center overflow-hidden h-screen">
      <img
        src="./images/image_1.jpg"
        alt="Intro Background"
        width={2656}
        height={1792}
      />
      {children}
    </div>
  );
};

export default IntroSection;
