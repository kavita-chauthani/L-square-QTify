import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Song, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImage} alt="headphone" width={212} />
      </div>
    </div>
  );
};

export default Hero;
