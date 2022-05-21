import Link from 'next/link'
import cn from 'classnames';
import { useState } from 'react';

import style from './nav.module.scss';

export default function Nav({ onClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenCloseClick = () => {
        setIsOpen((value) => {
            if (!value) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = null;
            }

            return !value;
        });
    };

    const handleCloseClick = () => {
        setIsOpen((value) => {
            if (value) {
                document.body.style.overflow = null;
            } else {
                return value;
            }
        });
    };

    return (
        <>
            <nav className={style.nav}>
                <div>
                    <p>Filipe Soares</p>
                    <div className={cn({ [style.navmodal]: true, [style.open]: isOpen })}>
                        <ul>
                            <li><Link href="/" onClick={handleCloseClick}><a>Home</a></Link></li>
                            <li><Link href="/about" onClick={handleCloseClick}><a>↳ About Me</a></Link></li>
                            <li><Link href="/lab" onClick={handleCloseClick}><a>↳ Lab</a></Link></li>
                            <li><Link href="/contact"onClick={handleCloseClick}><a>↳ Contact</a></Link></li>
                        </ul>
                        <ul className={style.social}>
                            <li><a href="http://linkedin.com/in/fisoares" target="_blank">Linkedin -></a></li>
                            <li><a href="http://instagram.com/filipeafns/" target="_blank">Instagram -></a></li>
                        </ul>
                        <button onClick={handleOpenCloseClick}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}


// export default function Nav() {
//     return (
//         <>
//             <nav className={style.nav}>
//                 <div>
//                     <p>Filipe Soares</p>
//                     <div className={cn(style.navmodal, style.isclosed)}>
//                         <ul>
//                             <li><Link href="/"><a>Home</a></Link></li>
//                             <li><Link href="/about"><a>↳ About Me</a></Link></li>
//                             <li><Link href="/lab"><a>↳ Lab</a></Link></li>
//                             <li><Link href="/contact"><a>↳ Contact</a></Link></li>
//                         </ul>
//                         <ul className={style.social}>
//                             <li><a href="http://linkedin.com/in/fisoares" target="_blank">Linkedin -></a></li>
//                             <li><a href="http://instagram.com/filipeafns/" target="_blank">Instagram -></a></li>
//                         </ul> 
//                     </div>
//                 </div>
//                 <button>Open/close</button>
//             </nav>
//         </>
//     )
// }