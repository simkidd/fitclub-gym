import React, { useState } from "react";
import "./testimonials.scss";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const handleLeftArrow = ()=>{
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev)=> prev - 1)
  }
  const handleRightArrow=()=>{
    selected === tLength - 1 ? setSelected(0) : setSelected((prev)=> prev + 1)
  }

  return (
    <div className="testimonials">
      <div className="t-left">
        <span>Testimonials</span>
        <span className="strokeText">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
             - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="t-right">
      <div></div>
      <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img onClick={handleLeftArrow} src={leftArrow} alt="" />
          <img onClick={handleRightArrow} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
