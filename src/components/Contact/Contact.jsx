import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <>
      <footer id="contacts" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
            <a href="mailto:appasapkal26977@gmail.com">
              appasapkal26977@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/myname">linkedIn myname</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="github icon"
            />
            <a href="https://www.github.com/AppaSapkal01">
              github.com/AppaSapkal01
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Contact;
