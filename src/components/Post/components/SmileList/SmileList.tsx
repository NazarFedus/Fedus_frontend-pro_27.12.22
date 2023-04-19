import styles from "./SmileList.module.scss";
import React, { useEffect, useState } from "react";

import { smiles } from "./SmileList.mock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmileList({findWinner, sendWinner}) {
  const [count, setCount] = useState([
    { name: "smile", count: 0 },
    { name: "smileWink", count: 0 },
    { name: "angry", count: 0 },
    { name: "smileBeam", count: 0 },
    { name: "greanHeart", count: 0 },
  ]);

  const [find, setFind] = useState(false);
  const [winner, setWinner] = useState({});

  function getBiggestCount(){
     return count.map(item => item.count).sort((a, b) => b-a)[0]
  }

  function passWinner(){
     sendWinner(winner)
  }
  if(find) {
     passWinner()
  }


  useEffect(() => {
     const biggestCount = getBiggestCount()
     setWinner(count.filter(item => item.count === biggestCount ? item.name : null))
  }, [count])

  useEffect(() => {
     setFind(findWinner)
  }, [findWinner])

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
