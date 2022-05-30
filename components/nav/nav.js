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
                    <div className={style.logo} role="presentation">
                        <svg role="presentation" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75ZM57.7148 17.8711H20.2148V32.2266V46.2891V60.6445H30.1758V46.2891H41.0156V32.2266H57.7148V17.8711Z" fill="black" />
                        </svg>
                        <h4>Filipe Soares</h4>
                    </div>
                    <div role="navigation" aria-label="Main Navigation" className={cn({ [style.navmodal]: true, [style.open]: isOpen })}>
                        {/* <ul role="presentation">
                            <li role="presentation"><Link href="/" onClick={handleCloseClick}><a>Home</a></Link></li>
                            <li role="presentation"><Link href="/about" onClick={handleCloseClick}><a>↳ About Me</a></Link></li>
                            <li role="presentation"><Link href="/lab" onClick={handleCloseClick}><a>↳ Lab</a></Link></li>
                            <li role="presentation"><Link href="/contact"onClick={handleCloseClick}><a>↳ Contact</a></Link></li>
                        </ul> */}
                        <ul role="presentation" className={style.social}>
                            <li role="presentation"><a href="http://linkedin.com/in/fisoares" target="_blank">Linkedin -></a></li>
                            <li role="presentation"><a href="http://instagram.com/filipeafns/" target="_blank">Instagram -></a></li>
                        </ul>
                        <button onClick={handleOpenCloseClick} aria-label="open main menu">
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