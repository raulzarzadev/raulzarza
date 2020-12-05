import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./styles.module.css";
export default function ButtonBack() {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.back()}>
      <div className={styles.button__icon}>
        <Image src="/icons/previous.svg" width={30} height={30} />
      </div>
      <div className={styles.button__text}>
        <h3>Back</h3>
      </div>
    </button>
  );
}
