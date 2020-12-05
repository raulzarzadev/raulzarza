import React from "react";
import styles from "./MyLink.module.css";
import Link from "next/link";

export default function MyLink({ className, href, children, onClick, small }) {
  return (
    <Link href={href || "/"}>
      <a
        className={small ? styles.linksmall : styles.link}
        onClick={
          onClick &&
          ((e) => {
            e.preventDefault();
            onClick();
          })
        }
      >
        {children}
      </a>
    </Link>
  );
}
