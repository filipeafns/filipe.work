import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav'
import Header from '../components/header'
import Hey from '../components/section/hey'
import Exploring from '../components/section/exploring'
import Work from '../components/section/work'
import Around from '../components/section/around'
import Footer from '../components/footer'

import style from './index.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <title>Filipe Soares — Product, Branding & Motion Designer.</title>

        <meta
          name="title"
          content="Product, Branding & Motion Designer."
        />
        <meta
          name="description"
          content="Hey, I'm Filipe Soares, Senior Visual and Interaction designer, extremely curious, creative, and passionate about solving problems. For the past eleven years, I've had the chance to explore the most exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Interaction designer. I'm triggered by the opportunity to forge great experiences and engage people with the skills I've acquired over the years in Branding, Motion Design, Illustration and, Interaction."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Product, Branding & Motion Designer."
        />
        <meta
          property="og:description"
          content="Hey, I'm Filipe Soares, Senior Visual and Interaction designer, extremely curious, creative, and passionate about solving problems. For the past eleven years, I've had the chance to explore the most exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Interaction designer. I'm triggered by the opportunity to forge great experiences and engage people with the skills I've acquired over the years in Branding, Motion Design, Illustration and, Interaction."
        />
        <meta
          property="og:image"
          content="https://filipe.work/images/pagethumb.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Product, Branding & Motion Designer."
        />
        <meta
          property="twitter:description"
          content="Hey, I'm Filipe Soares, Senior Visual and Interaction designer, extremely curious, creative, and passionate about solving problems. For the past eleven years, I've had the chance to explore the most exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Interaction designer. I'm triggered by the opportunity to forge great experiences and engage people with the skills I've acquired over the years in Branding, Motion Design, Illustration and, Interaction."
        />
        <meta
          property="twitter:image"
          content="https://filipe.work/images/pagethumb.png"
        />
      </Head>
      <div className={style.index}>
        <main>
          <Nav />
          <Header />
          <Hey />
          <Exploring />
          <Work />
          <Around />
          {/* <Social /> */}
        </main>
        <Footer />
      </div>
    </Layout>
  );
}
