import style from './around.module.scss';

export default function Around() {
    return (
        <section className={style.around}>
          <div>
            <h2>I've been Around</h2>
            <div>
              <h3>+11 Years Creating Brands, Digital Products, Print, Engaging Visuals, Illustrations and Animations.</h3>
              <picture></picture>
            </div>
          </div>
          <ul>
            <li>
              <h4>Product Designer</h4>
              <span>You'll Find me Between Product...</span>
              <p>I've been a Generalist Product Designer for the past 6 Years. Recently I developed a deep interest in UI Engineering. Interaction, UI, and High Fidelity Prototyping are where I feel comfortable. Building Cohesive Design Systems are my main focus right now.</p>
            </li>
            <li>
              <h4>Visual Designer</h4>
              <span>... and Graphic Design.</span>
              <p>I'm a Graphic Designer from day one. Being able to Inspire,  Communicate, and Juggle Color and Typography to convey brand or product goals are always present in my day-to-day work.</p>
            </li>
            <li>
              <h4>New Technologies</h4>
              <span>Or in both</span>
              <p>Design can constantly adapt and find new spaces to breathe, and I look forward to combining all the gained knowledge to solve problems for the fast-paced new industries in XR, VR, Blockchains, and Automation.</p>
            </li>
          </ul>
        </section>
    )
}