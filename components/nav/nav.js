import Link from 'next/link'

import style from './nav.module.scss';

export default function Nav() {
    return (
        <>
            <nav className={style.nav}>
                <ul>
                    <li><Link href="/"><a>FS</a></Link></li>
                    <li><Link href="/about"><a>↳ About Me</a></Link></li>
                    <li><Link href="/lab"><a>↳ Lab</a></Link></li>
                    <li><Link href="/contact"><a>↳ Contact</a></Link></li>
                </ul>
                <span>Filipe Soares</span>
                <ul className={style.social}>
                    <li><a href="http://linkedin.com/in/fisoares" target="_blank">Linkedin -></a></li>
                    <li><a href="http://instagram.com/filipeafns/" target="_blank">Instagram -></a></li>
                </ul> 
            </nav>
        </>
    )
}