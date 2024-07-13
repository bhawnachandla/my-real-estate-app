import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* Left Side */}
        <div className="div hero-left flexColStart">
          <div className="flexColStart hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="hero-des secondaryText">
            <span>Find a variety of properties that suit you very easily</span>
            <br />
            <span>Forget all difficulties in finding a residence for you</span>
            <div className="search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search </button>
            </div>
          </div>
          <div className="flexCenter stats">
            <div className="flexColstart stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
              </span>
              <span className="plus_sign">+</span>
              <br />
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColstart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
              </span>
              <span className="plus_sign">+</span>
              <br />
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColstart stat">
              <span>
                <CountUp start={28} />
              </span>
              <span className="plus_sign">+</span>
              <br />
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="div hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
