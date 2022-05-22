import cn from 'classnames';
import style from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <h2>Bye</h2>
            <div>
                <div>
                    <h4>Will I ever hear from you Again?</h4>
                    <p>Get in touch filipe.afns@gmail.com</p>
                </div>
                <div>
                    <p>Designed In Figma, Coded by Me (HTML & CSS), Built with NEXT.JS and hosted at VERCEL.</p>
                </div>
            </div>
        </footer>
    )
}