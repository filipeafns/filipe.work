import cn from 'classnames';
import style from './header.module.scss';

import Image from 'next/image';

import lab1 from '../../public/images/lab/lab1.png';
import lab2 from '../../public/images/lab/lab2.png';
import lab3 from '../../public/images/lab/lab3.png';
import lab4 from '../../public/images/lab/lab4.png';
import lab5 from '../../public/images/lab/lab5.png';
import lab6 from '../../public/images/lab/lab6.png';


export default function Header() {
    return (
        <header  className={style.header}>
          <section className={cn(style.title, 'grid container')}>
            <h1>I'm Filipe Soares. Product, Branding and Visual Designer.</h1>
            <div>
            <span>
                <Image
                  src={lab1}
                  layout="fill"
                  placeholder='blur'
                />
            </span>
            <span>
                <Image
                  src={lab2}
                  layout="fill"
                  placeholder='blur'
                />
            </span>
            <span>
                <Image
                  src={lab3}
                  layout="fill"
                  placeholder='blur'
                />
            </span>
            <span>
                <Image
                  src={lab4}
                  layout="fill"
                  placeholder='blur'
                />
            </span>
            <span>
                <Image
                  src={lab5}
                  layout="fill"
                  placeholder='blur'
                />
            </span>
            <span>
                <Image
                  src={lab6}
                  layout="fill"
                  placeholder='blur'
                />
            </span>
            </div>
            {/* <Spline scene="https://prod.spline.design/rlUVl0RxykOsS2kZ/scene.splinecode" /> */}
          </section>
        </header>
    )
}