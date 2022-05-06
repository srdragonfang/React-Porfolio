import React from "react";
import Typed from "react-typed";
const Banner = () => {
  return (
    <div className="banner">
      <p>
        <Typed
          strings={["PORTFOLIO", "S.R Dragonfang"]}
          typeSpeed={120}
          backSpeed={120}
          loop
        />
      </p>
    </div>
  );
};

export default Banner;
