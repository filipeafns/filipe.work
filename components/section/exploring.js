import style from './exploring.module.scss';
import Tile from '../tiles/tile';

export default function Exploring() {
    return (
        <section className={style.exploring}>
          <h2>I'm Exploring</h2>
          <h3>Design for me has always been about exploring possibilities, either in Print, Code or Beyond. I Want to bring amazing things to the world.</h3>
          <h4>Recent Exploration</h4>
          <ul>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </ul>
        </section>
    )
}