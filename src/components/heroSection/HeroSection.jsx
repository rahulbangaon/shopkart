import React from "react";
import "./style.css";
import Star3 from "../../assets/Star3.svg";
import Star4 from "../../assets/Star4.svg";
import HeroModel from "../../assets/heroModel.svg";
import {FiArrowUpRight} from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="title-container">
        <h1 className="title-1 fs-700 ff-syne">Fresh</h1>
        <h1 className="title-2 fs-700 ff-syne">2022</h1>
        <h1 className="title-3 fs-700 ff-syne">Look</h1>
      </div>
      <div className="model">
        <img src={Star3} alt="" className="star3" />
        <img src={HeroModel} alt="Model Image" className="hero-model" />
      </div>
      {/* box for opacity */}
      <div className="opacity-box"></div>
      {/* box for yellow background */}
      <div className="yellow-box"></div>
      {/* line and star */}
      <div className="line-star">
        <img src={Star4} alt="" className="star4" />
      </div>
      {/* see more button */}
      <div className="button-container">
        <button className="see-more fs-400">See More</button>
        <FiArrowUpRight className="arrow-icon fs-400" />
      </div>
    </section>
  );
};

export default HeroSection;
