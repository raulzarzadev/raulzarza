import React from "react";
import Image from "next/image";
import MyLink from "../MyLink";
import styles from "./MiniCard.module.css";
export default function MiniCard({ card = {} }) {
  const { icon, title, url } = card;
  return (
    <div className={styles.tecs}>
      <div className={styles.tecs__card}>
        <div className={styles.tecs__card_icon}>
          <Image
            src={icon || "/"}
            alt={title}
            objectFit="contain"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.tecs__card_action}>{title}</div>
        {url && (
          <div className={styles.tecs__card_link}>
            <MyLink href={`${url}`} small>
              have a look...
              <Image src="/icons/link.svg" width={20} height={20}></Image>
            </MyLink>
          </div>
        )}
      </div>
    </div>
  );
}
