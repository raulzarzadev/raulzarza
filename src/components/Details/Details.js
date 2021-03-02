import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TECHS } from "../../../DATA";
export default function Details({ data = {} }) {
  const usedTechs = data?.technologies?.map((usedTech) => {
    return TECHS.find((tech) => tech?.ref == usedTech);
  });

  return (
    <div className={styles.details}>
      <div className={styles.details__title}>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.details__link}>
        <a href={data.link} className={styles.details__link_a}>
          Visit the site
          <Image src="/icons/link.svg" width={20} height={20} />
        </a>
      </div>
      <div className={styles.details__content}>
        <p className={styles.details__content_description}>{data.content}</p>
      </div>

      <div className={styles.details__techs}>
        <h3 className={styles.details__techs_title}>Used technologies</h3>
        <div className={styles.details__techs_container}>
          {usedTechs?.map((tech) => (
            <div className={styles.details__techs_container_item}>
              <Image src={tech?.icon || "/"} height={60} width={60} />
              <h6>{tech?.title}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.details__images}>
        <h3 className={styles.details__images_title}>Some images</h3>
        <div className={styles.details__images_container}>
          {/* TODO Incluir un open image para ver la iamgen a en un modal */}
          {data?.images?.map((img, i) => (
            <div className={styles.details__images_container_item}>
              <Image
                key={i}
                objectFit="contain"
                src={img || "/"}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
