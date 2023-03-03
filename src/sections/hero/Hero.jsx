import React from "react";
import Header from "../../components/Header";
import "./hero.scss";
import HeroImage from "../../assets/hero_image.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="h-left">
        <Header />

        <div className="best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="heroText">
          <div>
            <span className="strokeText">shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you shape and build your ideal body and live
              up your life to fulliest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="heroBtns">
          <button className="btn">get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>

      <div className="h-right">
        <button className="btn">join now</button>

        <div className="heartRate">
          <img src={Heart} alt="" />
          <span>heart rate</span>
          <span>116 bpm</span>
        </div>

        <img src={HeroImage} alt="" className="heroImage" />
        <img src={HeroImageBack} alt="" className="heroImageBack" />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
