import React from "react";
import cardImage from "../assets/card-image.png";
import styles from "./Card.module.css";

const Cardth = () => {
  return (
    <div class={styles.card}>
      <div class={styles.cardBody}>
        <img src={cardImage} alt="album " />
        <div class={styles.button}>
          <h5 class={styles.text}>100M Follows</h5>
        </div>
      </div>
      <h5 class={styles.title}>New Bollywood</h5>
    </div>
  );
};

export default Cardth;
