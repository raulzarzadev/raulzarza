import Head from "next/head";
import React from "react";
import ContactMe from "../src/components/Contact";
import Layout from "../src/components/Layout/Layout";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Raúl Zarza Contact</title>
      </Head>
      <ContactMe />;
    </>
  );
}
Contact.Layout = Layout;
