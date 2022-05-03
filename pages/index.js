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

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

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
          <Spline scene="https://prod.spline.design/NGFgjq0ZjYbCtk5E/scene.spline" />
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
