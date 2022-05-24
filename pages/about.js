import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>Filipe Soares. Product and Visual Designer</title>
        <meta name="description" content="Filipe Soares. Product and Visual Designerp" />
        <meta name="theme-color" content="#5d3acf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <Nav />
        </main>
        <Footer /> 
      </div>
    </Layout>
  )
}
