import React from "react";
import "./programs.scss";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programsHeader">
        <span className="strokeText">explore our</span>
        <span>programs</span>
        <span className="strokeText">to shape you</span>
      </div>

      <div className="programCategories">
        {programsData.map((program) => {
          return (
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
