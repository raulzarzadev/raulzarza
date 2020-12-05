import React from "react";
import MyLink from "../MyLink";
import styles from "./styles.module.css";
export default function AboutMe({ resume }) {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__title}> Hi there! </h2>
      <h3 className={styles.about__subtitle}>
        I am Raul Zarza and I am a full stack developer focused on javascript.
      </h3>
      <h2 className={styles.about__subtitle2}> Why program? </h2>
      <p className={styles.about__paraghraph}>
        Simple, because you can create wonderful things that can help many
        people. Because it's like seeing the bones that hold the current society
        ... and even more impressive, you can add parts, repair or transform it
        to your liking.
      </p>
      <h2 className={styles.about__subtitle2}> How did I start? </h2>
      <p className={styles.about__paraghraph}>
        I was always curious and wanted to create an app for swimmers and
        coaches, after two months in ireland, without work and without friends,
        I found <a href="https://platzi.com"> platzi </a> and Freddy Vega in
        Youtube. One year on platzi and then I took my own course learning more
        on a specific topic, Javascript.
      </p>
      <h2 className={styles.about__subtitle2}> My experience? </h2>
      <p className={styles.about__paraghraph}>
        I started about 3 years ago,When I had no idea what html was. Today I
        can create and implement by myself some moderately complex web
        applications.
      </p>
      <p className={styles.about__paraghraph}>
        More importantly, I know what to look for, where and how, I am not
        afraid to learn or ask.
      </p>
      <p className={styles.about__paraghraph}>
        Javascript seems like a whole world unto itself, and every time I learn
        something new. It's like everything could be written in js and And that
        makes me sfeel like no matter how much time passes or how much I learn,
        I will never finish learn it.{" "}
        <strong>
          Now I'm comfortable with that idea, before I was terrified
        </strong>
      </p>
      <p className={styles.about__paraghraph}>
        NODE.JS, REACT, MONGO and the rest of API have been the center of my
        attention, now NEXT, DOCKER and GRAPHQL are on the list.
      </p>
      <div className={styles.about_knowMore}>
        <h3>Know more?</h3>
        <h2>
          <MyLink href="/contact">Contact me</MyLink>
        </h2>
      </div>

      {/* <h2>¿Mi otro yo?</h2>
      <p>
        Licenciado en administracion del tiempo libre en la{" "}
        <a href="http://www.uniymca.edu.mx/">UniYMCA</a>, Guía de turismo
        alternativo y de aventura avalado por la norma
        <a href="https://www.gob.mx/cms/uploads/attachment/file/19524/2_NOM-09-TUR-2002.pdf">
          NOM_09_TUR_2002
        </a>
        Instructor de natacón por mas de 6 años, Ingenieria Mecanica Trunca,
        Carrera Tecninca en Diseño grafico y fotografía.
      </p> */}
    </div>
  );
}
