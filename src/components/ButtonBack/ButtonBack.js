import React from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.css";
import { BackIcon } from "../Icons";
export default function ButtonBack() {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.back()}>
      <div className={styles.button__icon}>
        <BackIcon />
      </div>
      <p className={styles.button__text}>back</p>
    </button>
  );
}
