import Head from 'next/head'
import Abstract from '../src/components/Abstract'
import Layout from '../src/components/Layout/Layout'
import MainRow from '../src/components/MainRow'
import MyLink from '../src/components/MyLink/MyLink'

import { TECHS } from '../DATA'
/* import { WORKS } from '../DATA'
 */ import { LEARNING } from '../DATA'

import Section from '../src/components/Section'
import { useEffect, useState } from 'react'
const fetching = async (url) => {
  const res = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log('err', err))
  return res
}
export default function Home() {
  useEffect(() => {

    fetching('/api/jobs')
      .then(setJobs)
      .catch((err) => console.log('err', err))
  }, [])

  const [jobs, setJobs] = useState([])
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
          <MainRow cards={jobs} title="Some of my works" />
        </section>
        <section>
          <MainRow
            cards={TECHS}
            title="Some of the technologies that I have handled"
          />
        </section>
        <section>
          <MainRow learning cards={LEARNING} title="Currently learning" />
        </section>

        <section>
          <Section>
            <MyLink href="/contact">Contact me</MyLink>
          </Section>
        </section>
      </div>
    </div>
  )
}

Home.Layout = Layout
