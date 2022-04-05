import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
      <div className={styles.container}>
        <main>
          <Nav />
        </main>
        <Footer /> 
      </div>
    </Layout>
  )
}
