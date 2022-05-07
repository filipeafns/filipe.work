import style from './tile.module.scss';
import cn from 'classnames';

export default function Tile({company, year, description}) {
    return (
      <li className={cn(style.tile)} >
        <a href="">
          <p>{company}</p>
          <legend>{year}</legend>
          <span>{description}</span>
        </a>
      </li>
    )
  }