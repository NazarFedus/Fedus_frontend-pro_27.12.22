import React, {useState} from 'react';
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@mui/material';
import Input from './input/Input'

export default function Header(){

     const [inputFocus, setInputFocus] = useState<boolean>(false);

     function handleStateChange(newState: boolean){
          console.log(newState)
          setInputFocus(newState)
          console.log(inputFocus)
     }
     return(
          <header>
               <div className='header__catalog'>
                    <FontAwesomeIcon icon={faBars} style={{color: "#fcfcfc", transform: 'scale(1.5)'}} />
                    <Typography variant='h6' style={{fontFamily: 'Arial', color: 'white'}}>Каталог</Typography>
               </div>

               <Input onStateChange={handleStateChange}/>

               <div>
                    <button>
                    </button>
                    <button></button>
                    <button></button>
                    <button></button>
               </div>
          </header>
     );
}