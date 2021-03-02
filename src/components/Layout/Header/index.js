import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
import MyLink from "../../MyLink";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__item}>
          <div className={styles.header__item_image}>
            <Link href="/">
              <a>
                <Image
                  src="/RZ-blanco.svg"
                  alt="logo-header"
                  height={70}
                  width={70}
                />
              </a>
            </Link>
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
      </header>
    </>
  );
}
