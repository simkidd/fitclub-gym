import React from "react";
import Header from "../../components/Header";
import "./hero.scss";
import HeroImage from "../../assets/hero_image.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id='home'>
    <div className="blur h-blur"></div>
      <div className="h-left">
        <Header />

        <div className="best-ad">
          <motion.div
          initial={{left: mobile ? '160px' : '208px'}}
          whileInView={{left:'8px'}}
          transition={{...transition, type:'tween'}}
          ></motion.div>
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
            <span><NumberCounter end={140} start={100} delay='4' preFix='+' /> </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix='+' /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix='+' /></span>
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
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        src={HeroImageBack} alt="" className="heroImageBack" />

        <motion.div className="calories"
        initial={{right: '37rem'}}
          whileInView={{right:'28rem'}}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
