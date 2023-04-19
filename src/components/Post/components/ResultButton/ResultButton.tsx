import styles from './ResultButton.module.scss'

export default function ResultButton(){

     function clickHandler(){
          
     }

     return(
          <button onClick={clickHandler} className={styles.result_button}>Show Result</button>
     );
}