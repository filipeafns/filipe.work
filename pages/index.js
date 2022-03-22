import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filipe Soares. Product and Visual Designer</title>
        <meta name="description" content="Filipe Soares. Product and Visual Designerp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <nav>
            <ul>
              <li>FS</li>
              <li>About Me</li>
              <li>All Works</li>
              <li>Contact</li>
            </ul>
          </nav>
          <span>Filipe Soares</span>
          <nav>
            <ul>
              <li>Linkedin -></li>
              <li>Instagram -></li>
            </ul>
          </nav>
        </header>
        <section>
          <h1>Hey, I'm Filipe Soares. I'm a Product and Visual Designer.</h1>
        </section>
        <section>
          <h2>Hey,</h2>
          <ul>
            <li>
              <h3>VTEX</h3>
              <span>Now - 2021</span>
              <p>Currently at VTEX developing for the future of e–commerce. I'm a Staff Designer building FastStore Framework.</p>
            </li>
            <li>
              <h3>Guava Software</h3>
              <span>2021 - 2017</span>
              <p>Develped propietary software for the energy sectors, e–commerce pages for Pet Foods, Tools for Practice Management Systems and more.</p>
            </li>
            <li>
              <h3>Freelance Work</h3>
              <span>2017 - 2012</span>
              <p>Developed +100 Visual systems for Local and International brands.</p>
            </li>
            <li>
              <h3>Blackninja</h3>
              <span>2017 - 2010</span>
              <p>Worked as an Art Director creating visuals for the 2014 Brazilian Wordcup & Coca Cola.</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>I'm Exploring</h2>
          <p>Design for me has always been about exploring possibilities, either in Print, Code or Beyond. I Want to bring amazing things to the world.</p>
          <h4>Recent Exploration</h4>
          <ul>
            <li>
              <a href="">
                 <picture></picture>
                <p>Label</p>
              </a>
            </li>
            <li>
              <a href="">
                 <picture></picture>
                <p>Label</p>
              </a>
            </li>
            <li>
              <a href="">
                 <picture></picture>
                <p>Label</p>
              </a>
            </li>
            <li>
              <a href="">
                 <picture></picture>
                <p>Label</p>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Work</h2>
          <p>I Strong vein for Product and Visual design. Here a couple of things I'm pround of, Or check All cases -></p>
          <div>
            <ul>
              <li>
                <a href="">
                  <p>VTEx</p>
                  <legend>2022</legend>
                  <span>Fastore</span>
                </a>
              </li>
              <li>
                <a href="">
                  <p>VTEx</p>
                  <legend>2022</legend>
                  <span>Fastore</span>
                </a>
              </li>
              <li>
                <a href="">
                  <p>VTEx</p>
                  <legend>2022</legend>
                  <span>Fastore</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>I'been Around</h2>
          <div>
            <p>+11 Years Creating Brands, Digital Products, Print, Engaging Visuals, Illustrations, Animations and still going...</p>
            <picture></picture>
          </div>
          <ul>
            <li>
              <h4>Product Designer</h4>
              <p>You'll Find me Between Product...</p>
              <p>I've been a Generalist Product Designer for the past 5 Years. Recently I developed deep interest for UI Development. Interaction, UI and High Fidelity Prototyping is were i feel confortable. Building Cohesive Design Systems are my main focus right now.</p>
            </li>
            <li>
              <h4>Visual Designer</h4>
              <p>... and Graphic Design.</p>
              <p>I'm a Graphic Designer from day one. Being able to Comunicate, Inspire, Juggle Color and Typgraphy, Animate, Illustrate and breath design history made me a good designer.</p>
            </li>
            <li>
              <h4>Or in Both.</h4>
              <p>You'll Find me Between Product...</p>
              <p>Graphic and Product design are a great match and gives me bright skies ahead. I nurture interest for XR, AR, VR and Creative Coding.</p>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              <div>
                <h4>Savee it @filipesoares</h4>
                <p>Visuals I'm digging</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Content @Medium</h4>
                <p>I Couple of Humble Articles</p>
                <ul>
                  <li>
                    <a href="">Design System you don't need</a>
                  </li>
                  <li>
                    <a href="">Visuals for the Web Ahead</a>
                  </li>
                  <li>
                    <a href="">How to manage UI Design</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <h4>Contact</h4>
                <p>Email me at</p>
                <div>
                  <figure></figure>
                  <a href="">Filipe.afns@gmail.com</a>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <h2>Bye</h2>
        <div>
          <div>
            <strong>Will I ever hear from you Again?</strong>
            <p>Send some love @Lypy</p>
          </div>
          <div>
            <p>Designed In Figma, Coded by Me (HTML & CSS), Built with NEXT.JS and hosted at VERCEL.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
