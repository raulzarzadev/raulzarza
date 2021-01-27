import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import styles from "./styles.module.css";

export default function MainRow({ cards, title, learning }) {
  return (
    <div className={styles.section__index}>
      <div style={{ display: "flex", alignItems:"center" }}>
        <h4>{title}</h4>
        {learning && <div className={styles.learning}></div>}
      </div>

      <div className={styles.section__index_row}>
        {cards.map((card, i) => (
          <MiniCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}
