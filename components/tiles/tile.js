import style from './tile.module.scss';
import cn from 'classnames';

import Image from 'next/image';

export default function Tile({company, year, description}) {
    return (
      <>
        <li className={cn(style.tile)} >
            <p>{company}</p>
            <legend>{year}</legend>
            <span>{description}</span>
            <Image
              src="/images/works/dyramid.png"
              alt="Case Image"
              layout="fill"
          />
        </li>
      </>
    )
  }