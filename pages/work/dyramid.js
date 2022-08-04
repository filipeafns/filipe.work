import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Nav from "../../components/nav";
import Footer from "../../components/footer";


import style from "./page-work.module.scss";

import Image from "next/image";

import dyramid from "../../public/images/works/dyramid.png";


export default function Dyramid() {
  return (
    <Layout dyramid>
      <Head>
        <title>Filipe Soares. Product and Visual Designer</title>
        <meta
          name="description"
          content="Filipe Soares. Product and Visual Designerp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.pagework}>
        <Nav />
        <section className={style.intro}>
          <h1>Dyramid</h1>
          <p>
            For Dyramid, design is a journey to find the balance between the
            always-changing needs of the people, technologies, and business
            involved in an Idea. The new logo represents the ongoing efforts to
            keep them in balance.
          </p>
        </section>
        <section className={style.plate}>
          <div>
            <p>Teste</p>
            <Image src={dyramid} placeholder="blur" />
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
