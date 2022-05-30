import style from './hey.module.scss';

export default function Hey() {
    return (
        <section className={style.hey}>
          <h2>Hey,</h2>
          <ul>
            <li>
              <h3>VTEX</h3>
            <span>Now - 2021</span>
              <p>I'm currently at VTEX developing for the future of e–commerce and building the FastStore UI system for storefronts.</p>
            </li>
            <li>
              <h3>Guava Software</h3>
            <span>2021 - 2017</span>
            <p>I developed proprietary software for the energy sector, dental practice, e–commerce and NGOs.</p>
            </li>
            <li>
              <h3>Freelance Work</h3>
            <span>2017 - 2012</span>
            <p>My freelancer work is mostly branding, motion, and graphic design. I Developed uncountable Visual systems for Local and International brands.</p>
            </li>
            <li>
              <h3>Blackninja</h3>
            <span>2017 - 2010</span>
              <p>Worked as an Art Director creating visuals for the 2014 Brazilian Wordcup, Coca Cola, local townhall and government sponsored events.</p>
            </li>
          </ul>
        </section>
    )
}