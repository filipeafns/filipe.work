import Link from 'next/link'

export default function Nav() {
    return (
        <header>
            <nav>
                <ul>
                <li><Link href="/"><a>FS</a></Link></li>
                <li><Link href="/about"><a>About Me</a></Link></li>
                <li><Link href="/works"><a>Works</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
                </nav>
                <span>Filipe Soares</span>
                <nav>
                <ul>
                <li>Linkedin -></li>
                <li>Instagram -></li>
                </ul>
            </nav>
        </header>
    )
}