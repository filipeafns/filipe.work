import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav'
import Footer from '../components/footer'

import style from './about.module.scss'

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>Filipe Soares. Product and Visual Designer</title>
        <meta name="description" content="Filipe Soares. Product and Visual Designerp" />
        <meta name="theme-color" content="#5d3acf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.about}>
          <Nav />
          <section>
            <div className={style.intro} >
              <h1>Filipe Soares</h1>
              <p>
                Hi, I'm a Interaction and visual Designer based in Recife, Northeast Brazil 🏖, and for the past ten years, I've had the chance to explore a couple of exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Product designer.
              </p>
            </div>
            <div  className={style.me} >
              <div>
                <h3>Now</h3>
                <p>Today I build tools that help developers create storefronts using the VTEX plataform. I'm responsible for caring for their overall experience when using our workflow, keeping and creating features for a brandless design system.</p>
              </div>
              <div>
                <h3>Future</h3>
                <p>Today I build tools that help developers create storefronts using the VTEX plataform. I'm responsible for caring for their overall experience when using our workflow, keeping and creating features for a brandless design system.</p>
              </div>
              <div>
                <h3>Experience</h3>
                <p>Today I build tools that help developers create storefronts using the VTEX plataform. I'm responsible for caring for their overall experience when using our workflow, keeping and creating features for a brandless design system.</p>
              </div>
            </div>
          </section>
      </main>
      <Footer /> 
    </Layout>
  )
}
