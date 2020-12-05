import Head from "next/head";
import React from "react";
import Layout from "../src/components/Layout/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>Raúl Zarza About</title>
      </Head>
      <div>about</div>
    </>
  );
}

About.Layout = Layout;
