import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import styles from "./styles.module.css";
export default function MainRow({ cards, title }) {
  return (
    <div className={styles.section__index}>
      <h4>{title}</h4>
      <div className={styles.section__index_row}>
        {cards.map((card, i) => (
          <MiniCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}
