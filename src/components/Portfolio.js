import React from "react";

import Introduce from "./Introduce";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
const Portfolio = ({ data }) => {
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <Introduce data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Certificates data={data} />
      </div>
    </div>
  );
};

export default Portfolio;
