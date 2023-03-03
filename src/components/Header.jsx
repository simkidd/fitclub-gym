import React, { useState } from "react";
import "./header.scss";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />

      {menu === false && mobile === true ? (
        <div
          onClick={() => setMenu(true)}
          style={{
            background: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="headerMenu">
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plan
            </Link>
            s
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
