"use client";

import React from "react";
import style from "./style.module.scss";

const Title = () => {
  return (
    <div className={style.hero}>
        <div className={style.title}>Educația de <span className={style.highlight}>mâine</span> incepe <span className={style.underline}>astăzi</span></div>
        <div className={style.description}>Sprijinim tinerii din România să învețe programare și să utilizeze AI, pregătindu-i pentru viitor.</div>
        <div className={style.callToAction}>
          <div className={style.secondDescription}>Alege să te implici și să devii parte din schimbare!</div>
            <a
              href="https://formular230.ro/programare-pentru-viitor"
              target="_self"
              className={style.btn}
            >
              Sustine-ne
            </a>
        </div>
    </div>
  );
};  

export default Title;