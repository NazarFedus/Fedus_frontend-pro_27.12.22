import { useEffect, useState } from 'react'
import styles from './Post.module.scss'

import SmileList from './components/SmileList/SmileList'
import ResultButton from './components/ResultButton/ResultButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Post({}){
     const [result, setResult] = useState(false);
     const [winnerIcon, setWinnerIcon] = useState([])

     function activeResult(isActive: boolean){
          setResult(isActive)
     }

     function getWinner(winner: any){
          setWinnerIcon(winner)
     }

     return(
          <div className={styles.post}>
               {result && (
                    <div className={styles.show_winner_block}>
                         Current Winner: {winnerIcon.map(e => <div><FontAwesomeIcon icon={e.icon}style={{color: "#71bcf8", transform: 'scale(1.5)'}}></FontAwesomeIcon></div>)}
                    </div>
               )}
               <SmileList findWinner={result} sendWinner={getWinner}></SmileList>
               <ResultButton onClick={activeResult}></ResultButton>
          </div>
     )
}