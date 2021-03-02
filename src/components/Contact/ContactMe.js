import Image from "next/image";
import React from "react";
import Section from "../Section";
import styles from "./styles.module.css";
import { EmailIcon, GitIcon, LinkedInIcon } from "../Icons";
import ButtonBack from "../ButtonBack/ButtonBack";

const contacts = [
  {
    href: "mailto:raulzarza.dev@gmail.com",
    label: "By Email",
    icon: <EmailIcon fontSize="large" />,
    details: "",
  },
  {
    href: "https://github.com/raulzarzadev",
    label: "In GitHub",
    icon: <GitIcon fontSize="large" />,
    details: "",
  },
  {
    href: "https://www.linkedin.com/in/raulzarzadev/?locale=en_US",
    label: "In Linkedin",
    icon: <LinkedInIcon fontSize="large" />,
    details: "In linkedin",
  },
];
export default function ContactMe() {
  return (
    <div className={styles.contact}>
      <div className='flex'>
        <ButtonBack />
      </div>
      <Section>
        <h2>Contact me</h2>
      </Section>
      {contacts.map((contact) => (
        <div className={styles.contact__item}>
          <a className={styles.contact__item_link} href={contact.href}>
            <div className={styles.contact__item_icon}>{contact.icon}</div>
            {contact.label}
          </a>
        </div>
      ))}

      {/* 
      <div className={styles.contact__item}>
        <a className={styles.contact__item_link} href="/downloads/cv" download="CVRaulZarza">
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
      </div> */}
    </div>
  );
}
