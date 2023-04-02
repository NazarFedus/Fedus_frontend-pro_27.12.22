import React, { useRef, useState } from "react";
// custom hook to find data:
import { getData } from "../scripts/GetData";
import { validation } from "../utils/validation";
import { CommentsList } from "./CommentsList";
import POST from './POST'

export function FindPost(){
     const [currentState, setCurrentState] = useState<string>('findPost');
     const [post, setPost] = useState('');
     const inputValue = useRef<any>(null);
     const [isValid, setIsValid] = useState<boolean>(true)
     const {getPost, getComment} = getData();

     async function clickHandler(){
          if(!validation(inputValue.current.value)){
               setIsValid(false);
          } else {
               setIsValid(true);
               const post = await getPost(inputValue.current.value);
               post ? setCurrentState('showPost') : null;
               setPost(post)
               console.log(post)
          }
     }

     return (
          <div className="container">
               {currentState === 'findPost' &&
                    <>
                         <input type={'number'} min='1' max='100' placeholder="Enter the id..." className="input" ref={inputValue}></input>
                         {!isValid && <h1>Please enter the correct value!</h1>}

                         <button onClick={clickHandler}>Search</button>
                    </>
               }
               {currentState === 'showPost' &&
                    <div>
                         <POST data={post}></POST>
                    </div>
               }
          </div>
     );
}