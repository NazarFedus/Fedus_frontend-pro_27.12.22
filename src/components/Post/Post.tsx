import styles from './Post.module.scss'

import SmileList from './components/SmileList/SmileList'
import ResultButton from './components/ResultButton/ResultButton'

export default function Post(){
     return(
          <div className={styles.post}>
               <SmileList></SmileList>
               <ResultButton></ResultButton>
          </div>
     )
}