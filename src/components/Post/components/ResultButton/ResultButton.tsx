import styles from './ResultButton.module.scss'

import React, {useState} from 'react';

interface IResultBtn {
     onClick: (isActive: boolean) => void;
}

export default function ResultButton(props: IResultBtn){

     const [showResult, setShowResult] = useState(false)

     function clickHandler(){
          setShowResult(showResult => !showResult)
          props.onClick(!showResult)
     }

     return(
          <button onClick={clickHandler} className={styles.result_button}>{showResult ? 'Hide Results' : 'Show Results'}</button>
     );
}