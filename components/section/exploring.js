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
            <h3>Design for me has always been about exploring possibilities, either in Print, Code or Beyond. You'll find me exploring new tools and ways to bring amazing things to the our digital lives.</h3>
            <h4>Recent Exploration</h4>
          </div>
          <ul>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <p></p>
                  <legend></legend>
                  <span></span>
                </div>
                <Image
                  src={lab1}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <p></p>
                  <legend></legend>
                  <span></span>
                </div>
                <Image
                  src={lab2}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <p></p>
                  <legend></legend>
                  <span></span>
                </div>
                <Image
                  src={lab3}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <p></p>
                  <legend></legend>
                  <span></span>
                </div>
                <Image
                  src={lab4}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <p></p>
                  <legend></legend>
                  <span></span>
                </div>
                <Image
                  src={lab5}
                  layout="fill"
                  placeholder='blur'
                />
            </li>
            <li className={cn(style.tile, style.square)}>
                <div>
                  <p></p>
                  <legend></legend>
                  <span></span>
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