import React, { Children } from "react";
import Image from "next/image";
import styles from "./MiniCard.module.css";
import Link from "next/link";

function MiniCard({ card = {} }) {
  const { icon, title, url } = card;
  return (
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
    </div>
  );
}

function Card({ card }) {
  const { url } = card;
  return (
    <div className={styles.tecs}>
      {url ? (
        <Link href={url}>
          <a>
            <MiniCard card={card} />
          </a>
        </Link>
      ) : (
        <MiniCard card={card} />
      )}
    </div>
  );
}

export default Card;
