import style from './exploring.module.scss';

export default function Exploring() {
    return (
        <section className={style.exploring}>
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
    )
}