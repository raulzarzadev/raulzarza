import Image from "next/image";
import React from "react";
import Section from "../Section";
import styles from "./styles.module.css";

export default function ContactMe() {
  return (
    <div className={styles.contact}>
      <Section>
        <h2>Contact me</h2>
      </Section>
      <div className={styles.contact__item}>
        <a
          className={styles.contact__item_link}
          href="mailto:raulzarza.dev@gmail.com"
        >
          <div className={styles.contact__item_icon}>
            <Image
              src="/icons/envelope.svg"
              alt="icon"
              width="100%"
              height="100%"
            />
          </div>
          by email
        </a>
      </div>

      <div className={styles.contact__item}>
        <a
          className={styles.contact__item_link}
          href="https://api.whatsapp.com/send?phone=+5215569733898"
        >
          <div className={styles.contact__item_icon}>
            <Image
              src="/icons/whatsapp-logo.svg"
              alt="icon"
              width="100%"
              height="100%"
            />
          </div>
          by whatsapp
        </a>
      </div>
      <div className={styles.contact__item}>
        <a
          className={styles.contact__item_link}
          href="https://github.com/raulzarzadev"
        >
          <div className={styles.contact__item_icon}>
            <Image
              src="/icons/github-logo-face.svg"
              alt="icon"
              width="100%"
              height="100%"
            />
          </div>
          Find me on github
        </a>
      </div>
      <div className={styles.contact__item}>
        <a
          className={styles.contact__item_link}
          href="https://www.linkedin.com/in/raulzarzadev/?locale=en_US"
        >
          <div className={styles.contact__item_icon}>
            <Image
              src="/icons/linkedin.svg"
              alt="icon"
              width="100%"
              height="100%"
            />
          </div>
          Find me on linkedin
        </a>
      </div>

      <div className={styles.contact__item}>
        <a className={styles.contact__item_link} href="">
          <div className={styles.contact__item_icon}>
            <Image
              src="/icons/curriculum.svg"
              alt="icon"
              width="100%"
              height="100%"
            />
          </div>
          Download my CV
        </a>
      </div>
    </div>
  );
}
