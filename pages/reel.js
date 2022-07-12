import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import Nav from '../components/nav'
import Footer from '../components/footer'

import style from './reel.module.scss'

import Image from 'next/image';

export default function Reel() {
  return (
    <Layout reel>
      <Head>
        <title>Filipe Soares. Product and Visual Designer</title>
        <meta
          name="description"
          content="Filipe Soares. Product and Visual Designerp"
        />
        <meta name="theme-color" content="#5d3acf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.about}>
        <Nav />
        <section>
          <div className={style.reel}>
            <div className={style.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/hgDgJevp1sU?controls=0"
                frameborder="0"
                controls="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
