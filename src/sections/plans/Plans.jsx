import React from "react";
import { plansData } from "../../data/plansData";
import "./plans.scss";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plansContainer" id="plans">
      <div className="blur p-blur1"></div>
      <div className="blur p-blur2"></div>
      <div className="plansHeader">
        <span className="strokeText">ready to start</span>
        <span>your journey</span>
        <span className="strokeText">now with us</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="planCard" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>&#8358; {plan.price}</span>

              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature">
                      <img src={whiteTick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>See more benefits -> </span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
