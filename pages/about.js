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
        <meta
          name="description"
          content="Filipe Soares. Product and Visual Designerp"
        />
        <meta name="theme-color" content="#5d3acf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.about}>
        <Nav />
        <section>
          <div className={style.intro}>
            <div>
              <Image
                src={profile}
                width={80}
                height={80}
                placeholder="blur"
                role="presentation"
              />
              <h1>Filipe Soares</h1>
            </div>
            <p>
              Hi, I'm a Interaction and visual Designer based in Recife,
              Northeast Brazil 🏖, and for the past eleven years, I've had the
              chance to explore a couple of exciting fields. I started as a
              Graphic Designer, gained experience as Art Director, and later
              become an Product designer.
            </p>
          </div>
          <div className={style.me}>
            <div>
              <h3>Experience</h3>
              <p>
                The layers are many. In 2011 I graduated in Graphic Design and
                worked for 3 years in Branding and Web. Later, I had the chance
                to jump into Advertising and became an Art Director for 6 years.
                This role allowed me to tailor the skills I use to this day and
                are complementary to problem-solving and communication. In 2017
                I decided to go fully digital and started working as a Product
                Designer for a Software company called Guava. As a unicorn
                product designer, I've had the chance to work with clients from
                day one to the final delivery, from Ideation to front-end. Guava
                was Aqhired in 2021 by VTEX, and today my team develop an
                Amazing product called FastStore.
              </p>
            </div>
            <div>
              <h3>Now</h3>
              <p>
                Today, I face the ever-changing and expanding environment that
                is UI Engineering. Even though I can navigate easily between UX
                and UI, my goals, passion for the craft and responsibilities
                shift towards tailoring great experiences. From complex design
                systems, excellent interaction design to state-of-the-art
                interfaces.
              </p>
              <p>
                Parallel to that, you will find me a curious being, exploring
                new technologies and gravitating towards the things that will
                shape our lives next. From Prompt design with AI tools,
                Blockchains to Augmented reality.
              </p>
            </div>
            <div>
              <h3>Future</h3>
              <p>
                The future is just around the corner and we — as designers — have a
                lot of ground to cover. This decade is already facing a surge in
                new technology and needs our skills to grant inclusion and
                accessibility. I'm committed to being part of this future. To
                build the tools that are going to shape our daily lives next.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
