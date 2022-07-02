import Head from 'next/head'
import Script from 'next/script';

import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav'
import Header from '../components/header'
import Hey from '../components/section/hey'
import Exploring from '../components/section/exploring'
import Work from '../components/section/work'
import Around from '../components/section/around'
import Footer from '../components/footer'
import Script from 'next/script'

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
        <meta property="og:image" content="https://filipe.work/images/pagethumb.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Filipe Soares — Product, Branding and Visual Designer." />
        <meta property="twitter:description" content="Hey, I'm Filipe Soares, Senior Visual and Interaction designer, extremely curious, creative, and passionate about solving problems. For the past eleven years, I've had the chance to explore the most exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Interaction designer. I'm triggered by the opportunity to forge great experiences and engage people with the skills I've acquired over the years in Branding, Motion Design, Illustration and, Interaction." />
        <meta property="twitter:image" content="https://filipe.work/images/pagethumb.png" />

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <Script async 
          src="https://www.googletagmanager.com/gtag/js?id=G-X8CKT7ZZS5"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X8CKT7ZZS5');
          `}
        </Script>
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
