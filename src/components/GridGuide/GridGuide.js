import React from "react";
import ButtonBack from "../ButtonBack/ButtonBack";
import MiniCard from "../MiniCard/MiniCard";
import MyLink from "../MyLink";
import styles from "./GridGuide.module.css";

const CARD = {
  title: "Raúl Zarza",
  icon: "/icons/works/raulzarza.png",
};

export default function GridGuide() {
  return (
    <div className={styles.guide}>
      <h1>Guia visual</h1>
      <div className={styles.guide__grid}>
        <div className={styles.guide__grid_item}>
          <MyLink href="">NEXT link</MyLink>
        </div>
        <div className={styles.guide__grid_item}>
          <ButtonBack />
        </div>
        <div className={styles.guide__grid_item}>
          <MiniCard card={CARD} />
        </div>
        <div className={styles.guide__grid_item}>
          <div className={styles.fonts}>
            <h1>h1 fontsize</h1>
            <h2>h2 fontsize</h2>
            <h3>h3 fontsize</h3>
            <h4>h4 fontsize</h4>
            <p>paragraph</p>
          </div>
        </div>

        <div className={styles.guide__grid_item}></div>
        <div className={styles.guide__grid_item}></div>
      </div>
    </div>
  );
}
