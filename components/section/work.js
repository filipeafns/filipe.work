import style from './work.module.scss';
import cn from 'classnames';
import Tile from '../Tiles/tile';

export default function Work() {
    return (
        <section className={cn(style.work, 'grid')}>
          <div>
            <h2>Work</h2>
            <p>I Strong vein for Product and Visual design. Here a couple of things I'm pround of, Or check All cases -></p>
            <div>
              <ul className={cn('grid')}>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
              </ul>
            </div>
          </div>
        </section>
    )
}