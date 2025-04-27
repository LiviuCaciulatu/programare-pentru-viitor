"use client";

import React from "react";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerCenter}>
        <div className={style.footerCenterLeft}>
          <div className={style.footerCenterLeftTitle}>
          Contact:
          </div>
          <div className={style.footerCenterLeftContent}>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/location.svg"
                alt="Location Icon"
                className={style.icon}
              />
              <a
                href="https://www.google.com/maps?q=103-105+Calea+Victoriei,+District+1,+Bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                103-105 Calea Victoriei, District 1, Bucharest
              </a>
            </div>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/mail.svg"
                alt="Mail Icon"
                className={style.icon}
              />
              <a href="mailto:salut@programare-pentru-viitor.ro" className={style.link}>
              salut@programare-pentru-viitor.ro
              </a>
            </div>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/phone.svg"
                alt="Phone Icon"
                className={style.icon}
              />
              <a href="tel:+40733311393" className={style.link}>
                +40 733 311 393
              </a>
            </div>
          </div>
        </div>
        <div className={style.footerCenterRight}>
          <div className={style.footerCenterRightTitle}>Implică-te:</div>
          <ul className={style.servicesList}>
            <li>Donează</li>
            <li>Fii voluntar</li>
            <li>Redirecționează 3.5%</li>
          </ul>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className={style.bottomContent}>
          <div className={style.copyright}>&copy; {new Date().getFullYear()}  CleanCodeIT</div>
          <div className={style.mediaLinks}>
            <div className={style.iconWithText}>
              <a
                href="https://www.facebook.com/cleancodero"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/facebook.svg"
                  alt="Facebook Icon"
                  className={style.icon}
                />
              </a>
            </div>
            <div className={style.iconWithText}>
              <a
                href="https://www.linkedin.com/company/cleancodero/about/"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/linkedin.svg"
                  alt="LinkedIn Icon"
                  className={style.icon}
                />
              </a>
            </div>
            <div className={style.iconWithText}>
              <a
                href="https://www.instagram.com/cleancode.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/instagram.svg"
                  alt="Instagram Icon"
                  className={style.icon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
