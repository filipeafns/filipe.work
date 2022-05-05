import style from './tile.module.scss';
import cn from 'classnames';

export default function Tile() {
    return (
      <li className={cn(style.tile)} >
        <a href="">
          <p>Vtex</p>
          <legend>2022</legend>
          <span>Fastore</span>
        </a>
      </li>
    )
  }