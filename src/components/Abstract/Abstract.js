import React from "react";
import styles from "./styles.module.css";
export default function Abstract() {
  return (
    <div className={styles.abstract}>
      <h1 className={styles.abstract__title}>Hi! I'm Raúl Zarza</h1>
      <h2 className={styles.abstract__subtitle}>
        {`I’m a Javascript Developer.`}
      </h2>
      <p className={styles.abstract__content}>
        {`
          Fervent believer that technology and science is the 
          only way to get a better humanity and that everything 
          in life can be resolved with a good design. 
          Putting the business models I designed into practice
          was what prompted me to learn to program.
        `}
      </p>
    </div>
  );
}
