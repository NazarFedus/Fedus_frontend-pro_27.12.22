import React, {useState} from "react";
import { getData } from "../scripts/GetData";
import { CommentsList } from "./CommentsList";
import { IComment } from "../scripts/interfaces";


export default ({data}:any) => {
     const {getPost, getComment} = getData();
     const [comments, setComments] = useState<IComment[]>([]);
     const [currentState, setCurrentState] = useState<string>('post')

     console.log(data)

     async function showComment(){
          const comments = await getComment(data.id)
          setComments(comments)
          setCurrentState('comments')
          console.log(comments)
     }
     return (
          <div className="post">
               {currentState === 'post' &&
                    <>
                         <h2>{data.title}</h2>
                         <p>{data.body}</p>
                         <p>Post ID: {data.id}</p>
                         <p>User ID: {data.userId}</p>
                         <button onClick={showComment}>Show Comment</button>
                    </>
               }

               {currentState === 'comments' && <CommentsList commentlist={comments}></CommentsList>}
          </div>
     )
}