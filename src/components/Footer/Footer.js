import React from "react";
import MyLink from "../MyLink";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
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
              {/* <li className={styles.nav__list_link}>
                <MyLink onClick={() => console.log("download my cv")}>
                  CV
                </MyLink>
              </li> */}
              <li className={styles.nav__list_link}>
                <MyLink href="/visual-guide">Viusal Guide</MyLink>
              </li>
              <li className={styles.nav__list_link}>
                <MyLink href="/contact">Contact</MyLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__grid_item}>
          <div style={{ textAlign: "center" }}>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
        <div className={styles.footer__grid_item}></div>
      </div>
    </div>
  );
}
