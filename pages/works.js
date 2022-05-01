import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Works() {
  return (
    <Layout works>
      <Head>
        <title>Filipe Soares. Product and Visual Designer</title>
        <meta name="description" content="Filipe Soares. Product and Visual Designerp" />
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
