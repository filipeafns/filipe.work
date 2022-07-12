import Link from "next/link";
import cn from "classnames";
import React, { useState, useEffect } from "react";


import style from "./nav.module.scss";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseClick = () => {
    setIsOpen((value) => {
      if (!value) {
        document.body.style.overflow = "open";
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
          <Link href="/">
            <a className={style.logo} role="presentation">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h4>Filipe Soares</h4>
            </a>
          </Link>
          <div
            role="navigation"
            aria-label="Main Navigation"
            className={cn({ [style.navmodal]: true, [style.open]: isOpen })}
          >
            <ul className={style.links} role="presentation">
              <li role="presentation">
                <Link href="/" onClick={handleCloseClick} spy={true}>
                  Home
                </Link>
              </li>
              <li role="presentation">
                <Link href="/about" onClick={handleCloseClick} spy={true}>
                  ↳ About Me
                </Link>
              </li>
              <li role="presentation">
                <Link href="/reel" onClick={handleCloseClick} spy={true}>
                  ↳ Reel
                </Link>
              </li>
              {/* <li role="presentation"><Link href="/lab" onClick={handleCloseClick}>↳ Lab</Link></li>
                            <li role="presentation"><Link href="/contact"onClick={handleCloseClick}>↳ Contact</Link></li> */}
            </ul>
            <ul
              className={style.social}
              role="presentation"
              className={style.social}
            >
              <li role="presentation">
                <a href="http://linkedin.com/in/fisoares" target="_blank">
                  Linkedin ->
                </a>
              </li>
              <li role="presentation">
                <a href="http://instagram.com/filipeafns/" target="_blank">
                  Instagram ->
                </a>
              </li>
            </ul>
            <button
              onClick={handleOpenCloseClick}
              open={isOpen}
              aria-label="open main menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
