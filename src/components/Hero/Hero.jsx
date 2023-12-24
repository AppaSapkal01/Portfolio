import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Appa</h1>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit beatae, praesentium deserunt unde commodi placeat ea
            vel a.
          </p>
          <a
            href="mailto:appasapkal26977@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
      </section>
    </>
  );
};

export default Hero;
