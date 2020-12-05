import Image from "next/image";
import React from "react";
import MyLink from "../MyLink/MyLink";
import styles from "./Header.module.css";

console.log(styles);
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__item}>
          <div className={styles.header__item_image}>
            <Image
              src="/RZ-sinfondo.svg"
              alt="logo-header"
              height={70}
              width={70}
            />
          </div>
        </div>
        <div className={styles.header__item}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__list_link}>
                <MyLink href="/">home</MyLink>
              </li>
              <li className={styles.nav__list_link}>
                <MyLink href="/contact">Say hi!</MyLink>
              </li>
              <li className={styles.nav__list_link}>
                <MyLink href="/about">about</MyLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
