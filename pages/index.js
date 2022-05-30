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
        <link rel="icon" href="/favicon.ico" />

        <title>Filipe Soares — Product, Branding and Visual Designer.</title>
        <meta name="title" content="Filipe Soares — Product, Branding and Visual Designer." />
        <meta name="description" content="Hey, I'm Filipe Soares, Senior Visual and Interaction designer, extremely curious, creative, and passionate about solving problems. For the past eleven years, I've had the chance to explore the most exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Interaction designer. I'm triggered by the opportunity to forge great experiences and engage people with the skills I've acquired over the years in Branding, Motion Design, Illustration and, Interaction." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Filipe Soares — Product, Branding and Visual Designer." />
        <meta property="og:description" content="Hey, I'm Filipe Soares, Senior Visual and Interaction designer, extremely curious, creative, and passionate about solving problems. For the past eleven years, I've had the chance to explore the most exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Interaction designer. I'm triggered by the opportunity to forge great experiences and engage people with the skills I've acquired over the years in Branding, Motion Design, Illustration and, Interaction." />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Filipe Soares — Product, Branding and Visual Designer." />
        <meta property="twitter:description" content="Hey, I'm Filipe Soares, Senior Visual and Interaction designer, extremely curious, creative, and passionate about solving problems. For the past eleven years, I've had the chance to explore the most exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Interaction designer. I'm triggered by the opportunity to forge great experiences and engage people with the skills I've acquired over the years in Branding, Motion Design, Illustration and, Interaction." />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
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
  )
}
