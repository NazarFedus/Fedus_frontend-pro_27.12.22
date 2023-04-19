import { useState } from 'react'
import styles from './Post.module.scss'

import SmileList from './components/SmileList/SmileList'
import ResultButton from './components/ResultButton/ResultButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { smiles } from './components/SmileList/SmileList.mock'

export default function Post({}){
     const [result, setResult] = useState(false);
     const [winnerIcon, setWinnerIcon] = useState([])

     function activeResult(isActive: boolean){
          console.log(isActive)
          setResult(isActive)
     }

     function getWinner(winner: any){
          console.log(winner)
          const smile = smiles.filter(e => e.name === winner[0].name ? e.icon : null)
          console.log(smile)
          // setWinnerIcon(smile)
     }

     return(
          <div className={styles.post}>
               {result && <div className={styles.show_winner_block}>Current Winner: <FontAwesomeIcon icon={smiles.icon}style={{color: "#71bcf8",}}></FontAwesomeIcon></div>}
               <SmileList findWinner={result} sendWinner={getWinner}></SmileList>
               <ResultButton onClick={activeResult}></ResultButton>
          </div>
     )