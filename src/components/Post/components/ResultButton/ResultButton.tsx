import styles from './ResultButton.module.scss'

import React, {useState} from 'react';

export default function ResultButton({onClick}){

     const [showResult, setShowResult] = useState(false)

     function clickHandler(){
          setShowResult(showResult => !showResult)
          onClick(!showResult)
     }

     return(
          <button onClick={clickHandler} className={styles.result_button}>{showResult ? 'Hide Results' : 'Show Results'}</button>
     );
}