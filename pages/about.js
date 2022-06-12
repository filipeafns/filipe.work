import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav'
import Footer from '../components/footer'
import profile from '../public/images/profile.png'

import style from './about.module.scss'

import Image from 'next/image';

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
              <div>
                <Image
                  src={profile}
                  width={100}
                  height={100}
                  placeholder='blur'
                  role='presentation'
                />
                <h1>Filipe Soares</h1>
              </div>
              <p>
                Hi, I'm a Interaction and visual Designer based in Recife, Northeast Brazil 🏖, and for the past ten years, I've had the chance to explore a couple of exciting fields. I started as a Graphic Designer, gained experience as Art Director, and later become an Product designer.
              </p>
            </div>
            <div  className={style.me} >
              <div>
                <h3>Now</h3>
                <p>Today I build tools that help developers create storefronts using the VTEX plataform. I'm responsible for caring for their overall experience when using our workflow, keeping and creating features for a brandless design system.</p>
              <p>There's no way i'd be here today if it wasn't my extreme curiosity. It's very hard for me to settle with bare minimum, I'm always looking for ways to dive deeper and exploring every single corner, have my hands along the journey is a prime. It's not hard for me to navigate between Graphic, Product  Design and Frontend these days.</p>
              </div>
              <div>
                <h3>Future</h3>
                <p>The more we grow as Product or Interaction Designers, more ground we have to cover. Most recently I decided to focus mainly on UI Engeneering and Interaction, so i can give the proper care design systems demand. From creation, maintenance and sync along Figma and Code.</p>
                <p>The future it's just around the corner, and I look forward to solve problems, create interfaces and project for a myriad of areas. eCommerce, Fintechs, Web3 and Auto have my attention.</p>
              </div>
              <div>
                <h3>Experience</h3>
                <p>Long before i even know i'd like to become a Interaction designer, i used to study HTML in a old Nokia Phone(2005), as a teenager, my hobby was to customize my blogger page and improve on CSS.</p>
                <p>Even though i had a passion for the web, i ended up in Graphic design.
                  Print brought me a lot of love for Colors and Typography, culminating in total love for branding. I can count 100s of logos and prints in the wild today (2010 – 2019).</p>
                <p>Still missing the chance to work with Interaction, I decided to go full interaction for my graduation project 2011. Since the course was print focused, i decided to bring print to the recently lauch ipad2. I was the first Digital Magazine deployed in Brazil through the App Store. The project became a reference in the School I was and they had to bring interaction design to the curriculum. You can check the project here</p>
              </div>
            </div>
          </section>
      </main>
      <Footer /> 
    </Layout>
  )
}
