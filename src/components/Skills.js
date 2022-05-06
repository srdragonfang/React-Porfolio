import React from "react";
import { SkillsData } from "./SkillsData";
const Skills = () => {
  return (
    <section className="section">
      <h1>Skills</h1>
      <div className="section-list">
        {SkillsData.map((item, index) => {
          return (
            <div className="section-item btn-effect-1" key={index}>
              <div className="item-icon">{item.icon}</div>
              <div className="item-title item-hide">{item.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
