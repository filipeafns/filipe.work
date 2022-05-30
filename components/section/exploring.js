import style from './exploring.module.scss';
import cn from 'classnames';

import Image from 'next/image';

import lab1 from '../../public/images/lab/lab1.png';
import lab2 from '../../public/images/lab/lab2.png';
import lab3 from '../../public/images/lab/lab3.png';
import lab4 from '../../public/images/lab/lab4.png';
import lab5 from '../../public/images/lab/lab5.png';
import lab6 from '../../public/images/lab/lab6.png';

export default function Exploring() {
    return (
        <section className={style.exploring}>
          <div>
            <h2>I'm Exploring</h2>
            <h3>Design, for me, has always been about exploring possibilities. Either in Print, Code, or Beyond, you'll find me exploring new tools and ways to bring amazing things into existence.</h3>
          </div>
          <div className={style.recent}>
            <h4>Recent Exploration</h4>
            <svg width="69" height="28" viewBox="0 0 69 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6875 28L0.6875 14L14.6875 0L17.0938 2.375L7.1875 12.2812H62.5L52.5938 2.375L55 0L69 14L55 28L52.5938 25.5938L62.5 15.7188H7.1875L17.0938 25.5938L14.6875 28Z" fill="black" />
            </svg>
          </div>
          <ul>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <h4>AR Filters</h4>
                  <p>Instragram filter experiment</p>
                </div>
                <Image
                  src={lab1}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <h4>Animation</h4>
                  <p>Short animation clip for a local band</p>
                </div>
                <Image
                  src={lab2}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <h4>Getting Physical</h4>
                  <p>Music and Figma Prototipation</p>
                </div>
                <Image
                  src={lab3}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <h4>Creative Coding</h4>
                  <p>Touchdesigner initial studies</p>
                </div>
                <Image
                  src={lab4}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <h4>Skeumorphism</h4>
                  <p>Recreating physical buttons in Figma</p>
                </div>
                <Image
                  src={lab5}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <h4>Illustration</h4>
                  <p>Surrealist experiments</p>
                </div>
                <Image
                  src={lab6}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
          </ul>
        </section>
    )
}