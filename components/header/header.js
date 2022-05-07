import cn from 'classnames';
import style from './header.module.scss';

// import dynamic from 'next/dynamic';

// const Spline = dynamic(() => import('@splinetool/react-spline'), {
//   ssr: false,
// });

export default function Header() {
    return (
        <header  className={style.header}>
          <section className={cn(style.title, 'grid container')}>
            <h1>Hey, I'm Filipe Soares. I'm a Product and Visual Designer.</h1>
            {/* <Spline scene="https://prod.spline.design/rlUVl0RxykOsS2kZ/scene.splinecode" /> */}
          </section>
        </header>
    )
}