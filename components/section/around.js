import style from './around.module.scss';

export default function Around() {
    return (
        <section className={style.around}>
          <div>
            <h2>I've been Around</h2>
            <div>
              <h3>+11 Years Creating Brands, Digital Products, Print, Engaging Visuals, Illustrations, Animations and still going...</h3>
              <picture></picture>
            </div>
          </div>
          <ul>
            <li>
              <h4>Product Designer</h4>
              <span>You'll Find me Between Product...</span>
              <p>I've been a Generalist Product Designer for the past 5 Years. Recently I developed deep interest for UI Development. Interaction, UI and High Fidelity Prototyping is were i feel confortable. Building Cohesive Design Systems are my main focus right now.</p>
            </li>
            <li>
              <h4>Visual Designer</h4>
              <span>... and Graphic Design.</span>
              <p>I'm a Graphic Designer from day one. Being able to Comunicate, Inspire, Juggle Color and Typgraphy, Animate, Illustrate and breath design history made me a good designer.</p>
            </li>
            <li>
              <h4>New Technologies</h4>
              <span>Or in both</span>
              <p>Graphic and Product design are a great match and gives me bright skies ahead. I nurture interest for XR, AR, VR and Creative Coding.</p>
            </li>
          </ul>
        </section>
    )
}