import Head from "next/head";
import React from "react";
import { ABOUT_ME } from "../DATA";
import AboutMe from "../src/components/AboutMe";
import Layout from "../src/components/Layout/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>Raúl Zarza About</title>
      </Head>
      <AboutMe resume={ABOUT_ME} />
    </>
  );
}

About.Layout = Layout;
