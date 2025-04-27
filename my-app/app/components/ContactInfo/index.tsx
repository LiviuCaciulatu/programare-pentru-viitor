"use client";

import React from "react";
import style from "./style.module.scss";

const ContactInfo = () => {
  return (
    <section className={style.hero}>
        <div className={style.title}>Contactează-ne</div>
      <a
        href="https://www.google.com/maps?q=103-105+Calea+Victoriei,+District+1,+Bucharest"
        target="_blank"
        rel="noopener noreferrer"
        className={style.description}
      >
        103-105 Calea Victoriei, District 1, Bucharest
      </a>
      <a
        href="mailto:salut@programare-pentru-viitor.ro"
        className={style.description}
      >
        salut@programare-pentru-viitor.ro
      </a>
      <a href="tel:+40733311393" className={style.description}>
        +40 733 311 393
      </a>
    </section>
  );
};

export default ContactInfo;
