import React, { useRef, useState } from "react";

export function FindPost(){
     const inputValue = useRef<any>(null);
     const [isValid, setIsValid] = useState<boolean>(true)

     function clickHandler(){
          if(inputValue.current.value >= 1 && inputValue.current.value <= 100){
               setIsValid(true);
          } else {
               setIsValid(false);
          }
     }

     return (
          <div className="container">
               <input type={'number'} min='1' max='100' placeholder="Enter the id..." className="input" ref={inputValue}></input>
               {!isValid && <h1>Please enter the correct value!</h1>}

               <button onClick={clickHandler}>Search</button>
          </div>
     );
}