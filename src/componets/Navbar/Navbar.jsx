import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          >
            <li onClick={() => setMenuOpen(false)}>
              <a href="#about">About</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#experience">Experience</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
