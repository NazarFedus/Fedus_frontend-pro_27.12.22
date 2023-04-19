import styles from "./SmileList.module.scss";
import React, { useState } from "react";

import { smiles } from "./SmileList.mock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISmiles {
  smile: number;
  smileWink: number;
  angry: number;
  smileBeam: number;
  greanHeart: number;
}

export default function SmileList() {
  const [count, setCount] = useState([
    { name: "smile", count: 0 },
    { name: "smileWink", count: 0 },
    { name: "angry", count: 0 },
    { name: "smileBeam", count: 0 },
    { name: "greanHeart", count: 0 },
  ]);

  function addSmileCount(event: any){
     const increaseSmile = event.currentTarget.getAttribute('value');
     const updateCount = count.map(item => {
          if(item.name === increaseSmile){
               return {...item, count: item.count+1}
          }
          return item;
     })

     setCount(updateCount)
  }

  return (
    <div className={styles.smile_list}>
      {smiles.map((smile) => {
        return (
          <div className={styles.smilewrapper} key={smile.id} onClick = {addSmileCount} value={smile.name}>
            <FontAwesomeIcon
              icon={smile.icon}
              className={styles.smile}
            ></FontAwesomeIcon>
            <span className={styles.smile_count}>{count.map(e => e.name === smile.name ? e.count : '')}</span>
          </div>
        );
      })}
    </div>
  );
}
