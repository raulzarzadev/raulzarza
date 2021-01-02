import Head from "next/head";
import { useRouter } from "next/router";
import { WORKS } from "../../DATA";
import ButtonBack from "../../src/components/ButtonBack/ButtonBack";
import DetailsView from "../../src/components/Details";
import Layout from "../../src/components/Layout";

export default function Details() {
  const router = useRouter();
  const { ref } = router.query;
  const data = WORKS.find((work) => work.ref === ref);
  return (
    <>
      <Head>
        <title>Work details</title>
      </Head>
      <ButtonBack />
      <DetailsView data={data?.resume} />
    </>
  );
}

Details.Layout = Layout;

 // In a file, far, far, away module.exports = function(dependencyA, dependencyB) { dependencyA(); dependencyB(); } // In another file, the `caller` // This is where the actual, concrete implementation is stonetworking var depA = someConcreteImplementation; var depB = someOtherConcreteImplementation; var someModule = require('pathToSomeModule'); someModule(depA, depB); 
