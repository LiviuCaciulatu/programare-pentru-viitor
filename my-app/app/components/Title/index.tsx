"use client";

import React from "react";
import style from "./style.module.scss";

const Title = () => {
  return (
    <div className={style.hero}>
        <div className={style.title}>Educația de <span className={style.highlight}>mâine</span> incepe <span className={style.underline}>astăzi</span></div>
        <div className={style.description}>Sprijinim tinerii din Romania sa invete programare si sa utilizeze AI, pregatindu-i pentru viitor</div>
        <div className={style.callToAction}>
          <div className={style.secondDescription}>Alege sa te implici si sa devii parte din schimbare!</div>
          <button className={style.btn}>Sustine-ne</button>
        </div>
    </div>
  );
};  

export default Title;