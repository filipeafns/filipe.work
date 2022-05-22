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
          <div>
            <h1>H1 Text Example</h1>
            <h2>H2 Text Example</h2>
            <h3>H3 Text Example</h3>
            <h4>H4 Text Example</h4>
            <h5>H5 Text Example</h5>
            <p>p Text Example</p>
          </div>
        </main>
        <Footer /> 
      </div>
    </Layout>
  )
}
