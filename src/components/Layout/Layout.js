import React from "react";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Head>
        <link rel="icon" href="/RZ-blanco.svg" />
      </Head>
      <Header />
      <section className={styles.container}>{children}</section>
      <Footer />
    </main>
  );
}
