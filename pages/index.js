import Head from "next/head";
import Abstract from "../src/components/Abstract";
import Layout from "../src/components/Layout/Layout";
import MainRow from "../src/components/MainRow";
import MyLink from "../src/components/MyLink/MyLink";

import { TECHS } from "../DATA";
import { WORKS } from "../DATA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raúl Zarza</title>
      </Head>
      <div>
        <section>
          <Abstract />
        </section>

        <section>
          <MainRow
            cards={TECHS}
            title="Some of the technologies that I have handled"
          />
        </section>
        <section>
          <MainRow cards={WORKS} title="Some of my works" />
        </section>

        <section>
          <h2 style={{ textAlign: "center", margin: "3rem" }}>
            <MyLink href="/contact">Contact me</MyLink>
          </h2>
        </section>
      </div>
    </div>
  );
}

Home.Layout = Layout;
