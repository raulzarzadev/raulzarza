import React from "react";
import styles from "./styles.module.css";
export default function Abstract() {
  return (
    <div className={styles.abstract}>
      <h1 className={styles.abstract__title}>Hi! I'm Raúl Zarza</h1>
      <h2 className={styles.abstract__subtitle}>
        And I'm software developer...
      </h2>
      <p className={styles.abstract__content}>
        {`Focused on fullstack development with javascript, 
        plus some additional features.`}
      </p>
    </div>
  );
}
