import style from './hey.module.scss';

export default function Hey() {
    return (
        <section className={style.hey}>
          <h2>Hey,</h2>
          <ul>
            <li>
              <h3>VTEX</h3>
            <span>Now - 2021</span>
              <p>Currently at VTEX developing for the future of e–commerce. I'm a Staff Designer building the FastStore UI.</p>
            </li>
            <li>
              <h3>Guava Software</h3>
            <span>2021 - 2017</span>
              <p>Develped propietary software for the energy sector, Practice Management Systems, e–commerce pages for Pet Food, and more.</p>
            </li>
            <li>
              <h3>Freelance Work</h3>
            <span>2017 - 2012</span>
              <p>Developed uncountable Visual systems for Local and International brands.</p>
            </li>
            <li>
              <h3>Blackninja</h3>
            <span>2017 - 2010</span>
              <p>Worked as an Art Director creating visuals for the 2014 Brazilian Wordcup, Coca Cola, Local townhall and government sponsored events.</p>
            </li>
          </ul>
        </section>
    )
}