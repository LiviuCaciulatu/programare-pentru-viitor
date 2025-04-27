"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

const Redirectioneaza = () => {

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.leftSide}>
          <div className={style.title}>3,5% face diferența</div>
          <div className={style.description}>
            Chiar și cel mai mic gest poate avea un impact extraordinar, dacă
            este făcut cu inima. Redirecționează 3,5% din impozitul tău pe venit
            către programele educaționale ale Programare Pentru Viitor și
            contribuie la formarea viitorului prin educație practică!
          </div>
          <a
            href="https://formular230.ro/programare-pentru-viitor"
            target="_self"
            className={style.btn}
          >
            Redirecționează 3,5%
          </a>
        </div>
        <div className={style.rightSide}>
          <Image
            src="/assets/svg/donate.svg"
            alt="Redirectioneaza"
            width={800}
            height={800}
            className={style.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Redirectioneaza;
