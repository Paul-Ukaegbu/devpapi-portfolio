import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h5>Software Engineer - Music Producer - Pilot </h5>
        <ul className="header-links">
          <li>
            <a href="about">{"> "}ABOUT</a>
          </li>
          <li>
            <a href="portfolio">{"> "}CONTACT</a>
          </li>
        </ul>
      </header>

      <section className={styles.section}>
        <h1 id="#logo" className={styles.logo}>{"> "}Hi, I&apos;m Paul!<span className={styles.cursor}>_</span></h1>
        <h5 className={styles.quote}>The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge</h5>
      </section>

    </main>
  );
}
