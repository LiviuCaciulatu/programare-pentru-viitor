"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 989 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav className={`${style.nav}`}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <Link href="/" className={pathname === "/" ? style.active : ""}>
            <img src="/assets/svg/logo.svg" alt="Logo" className={style.logo} />
          </Link>
        </li>

        <button
          className={style.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul
          className={`${style.navSubList} ${
            mobileMenuOpen ? style.mobileOpen : ""
          }`}
        >
          <li className={style.dropItem}>
            <a
              href="https://formular230.ro/programare-pentru-viitor"
              target="_self"
              className={style.navLink}
            >
              Despre noi
            </a>
          </li>
          <li className={style.dropItem}>
            <a
              href="https://formular230.ro/programare-pentru-viitor"
              target="_self"
              className={style.navLink}
            >
              Sustine-ne
            </a>
          </li>

          {mobileMenuOpen && (
            <li className={`${style.dropItem} ${style.mobileContactItem}`}>
              <Link
                href="/Contact"
                className={`${style.navLink} ${
                  pathname === "/Contact" ? style.active : ""
                }`}
              >
                Contact
              </Link>
            </li>
          )}
        </ul>

        <li className={`${style.dropItem} ${style.desktopContactItem}`}>
          <Link
            href="/Contact"
            className={`${style.navLink} ${style.ContactItem} ${
              pathname === "/Contact" ? style.activeBtn : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
