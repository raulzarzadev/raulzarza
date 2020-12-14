import React from "react";
import MyLink from "../MyLink";
import styles from "./styles.module.css";
export default function Section({children}) {
  return (
    <div className={styles.section}>
        {children}
    </div>
  );
}
