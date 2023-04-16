import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.headerContent} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <h1
          className={isScrolled ? styles.centeredTitle : ""}
          onClick={() => router.push("/")}
        >
          FIT AI
        </h1>
        <div
          className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={() => handleMenu()}
        >
          ☰
        </div>
        {isMenuOpen && (
          <nav className={styles.navMenu}>
            <ul>
              <li onClick={() => router.push("/")}>Home</li>
              <li onClick={() => router.push("/about")}>About Us</li>
              <li onClick={() => router.push("/chat")}>Chat Now</li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
