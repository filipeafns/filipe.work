import cn from 'classnames';
import style from './header.module.scss';

export default function Header() {
    return (
        <header  className={style.header}>
          <section className={cn(style.title, 'grid container')}>
            <h1>Hey, I'm Filipe Soares. I'm a Product and Visual Designer.</h1>
          </section>
        </header>
    )
}