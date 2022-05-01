import Head from 'next/head'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <Layout contact>
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
