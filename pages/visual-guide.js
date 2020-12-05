import Head from "next/head";
import React from "react";
import Layout from "../src/components/Layout/Layout";
import GridGuide from '../src/components/GridGuide/GridGuide'
export default function VisualGuide() {
  return (
    <div>
      <Head>
        <title>Guía viusal</title>
      </Head>
      <GridGuide/>

      
    </div>
  );
}

VisualGuide.Layout = Layout;
