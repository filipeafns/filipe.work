import style from './tile.module.scss';
import cn from 'classnames';

export default function Tile() {
    return (
      <li className={cn(style.tile)} >
        <a href="">
          <p>Company</p>
          <legend>Year</legend>
          <span>Description</span>
        </a>
      </li>
    )
  }