import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav'
import Header from '../components/header'
import Hey from '../components/section/hey'
import Exploring from '../components/section/exploring'
import Work from '../components/section/work'
import Around from '../components/section/around'
import Social from '../components/section/social'
import Footer from '../components/footer'

import style from './index.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Filipe Soares. Product and Visual Designer</title>
        <meta name="description" content="Filipe Soares. Product and Visual Designerp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.index}>
        <main>
          <Nav />
          <Header />
          <Hey />
          <Exploring />
          <Work />
          <Around />
          <Social />
        </main>
        <Footer /> 
      </div>
    </Layout>
  )
}
