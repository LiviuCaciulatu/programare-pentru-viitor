"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

const Redirectioneaza = () => {

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/assets/ANAF.pdf";
    link.download = "ANAF.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className={style.container}>
        <div className={style.subContainer}>
      <div className={style.leftSide}>
        <div className={style.title}>3,5% face diferenta</div>
        <div className={style.description}>
          Chiar și cel mai mic gest poate avea un impact extraordinar, dacă este
          făcut cu inima. Redirecționează 3,5% din impozitul tău pe venit către
          programele educaționale ale Programare Pentru Viitor și contribuie la
          formarea viitorului prin educație practică!
        </div>
        <button className={style.btn} onClick={downloadFile}>Redirectioneaza 3,5%</button>
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
