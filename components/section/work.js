import style from './work.module.scss';
import cn from 'classnames';

import Image from 'next/image';

import dyramid from '../../public/images/works/dyramid.png';
import buzz from '../../public/images/works/buzz.png';
import clearworks from '../../public/images/works/clearworks.png';
import imagine from '../../public/images/works/imagine.png';
import integra from '../../public/images/works/integra.png';
import petplate from '../../public/images/works/petplate.png';
import urbano from '../../public/images/works/urbano.png';


import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});


export default function Work() {

    return (
        <section className={cn(style.work, 'grid')}>
          <div>
            <h2>Work</h2>
            <div>
              <h3>Selected works in Product and Visual design I'm pround of.</h3>
              <svg width="28" height="69" viewBox="0 0 28 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-6.1196e-07 14.2037L14 0.203735L28 14.2037L25.625 16.61L15.7188 6.70373L15.7187 62.0162L25.625 52.11L28 54.5162L14 68.5162L-2.37407e-06 54.5162L2.40625 52.11L12.2812 62.0162L12.2812 6.70373L2.40625 16.61L-6.1196e-07 14.2037Z" fill="black"/>
              </svg>
            </div>
            <div>
              <ul className={cn('grid')}>
                <li className={cn(style.tile, style.wideEnd)}>
                    <div>
                      <p></p>
                      <legend></legend>
                      <span></span>
                    </div>
                    <Image
                      src={integra}
                      layout="fill"
                      placeholder='blur'
                    />
                </li>
                {/* <li className={cn(style.tile, style.square)}>
                    <div>
                      <p></p>
                      <legend></legend>
                      <span></span>
                    </div>
                    <Spline scene="https://prod.spline.design/ll9uBn-RJ0t75phu/scene.splinecode" />
                </li> */}
                <li className={cn(style.tile, style.square)}>
                    <div>
                      <p></p>
                      <legend></legend>
                      <span></span>
                    </div>
                    <Image
                      src={imagine}
                      layout="fill"
                      placeholder='blur'
                    />
                </li>
                <li className={cn(style.tile, style.wideEnd)}>
                    <div>
                      <p></p>
                      <legend></legend>
                      <span></span>
                    </div>
                    <Image
                      src={petplate}
                      layout="fill"
                      placeholder='blur'
                    />
                </li>
                <li className={cn(style.tile, style.wideStart)}>
                    <div>
                      <p></p>
                      <legend></legend>
                      <span></span>
                    </div>
                    <Image
                      src={clearworks}
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
                      src={urbano}
                      layout="fill"
                      placeholder='blur'
                    />
                </li>
                <li className={cn(style.tile, style.wideEnd)}>
                    <div>
                      <p></p>
                      <legend></legend>
                      <span></span>
                    </div>
                    <Image
                      src={buzz}
                      layout="fill"
                      placeholder='blur'
                    />
                </li>
              </ul>
            </div>
          </div>
        </section>
    )
}