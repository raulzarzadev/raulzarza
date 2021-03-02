import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.main}>
        <Head>
          <link rel="icon" href="/RZ-blanco.svg" />
        </Head>
        <Header />
        <section className={styles.container}>{children}</section>
        <Footer />
      </div>
    </>
  );
}
