import React from "react";
import MyLink from '../../MyLink'
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__grid}>
        <div className={styles.footer__grid_item}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__list_link}>
                <MyLink href="/">Home</MyLink>
              </li>
              <li className={styles.nav__list_link}>
                <MyLink href="/about">about</MyLink>
              </li>

              <li className={styles.nav__list_link}>
                <MyLink href="/visual-guide">Viusal Guide</MyLink>
              </li>
              <li className={styles.nav__list_link}>
                <MyLink href="/contact">Contact</MyLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__grid_item}></div>
        <div className={styles.footer__grid_item}></div>
      </div>
    </footer>
  );
}
