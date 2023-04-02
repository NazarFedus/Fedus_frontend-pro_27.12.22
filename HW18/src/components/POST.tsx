import React, {useState} from "react";
import { getData } from "../scripts/GetData";
import { CommentsList } from "./CommentsList";
import { IComment } from "../scripts/interfaces";
import Post from './CardPost'


export default ({data}:any) => {
     const {getPost, getComment} = getData();
     const [comments, setComments] = useState<IComment[]>([]);
     const [state, setState] = useState<boolean>(false)

     console.log(data)

     async function showComment(){
          const comments = await getComment(data.id)
          setComments(comments)
          setState(!state)
          console.log(comments)
     }
     return (
          <div className="post">

               <div>
                    <Post post={data}></Post>
                    <button onClick={showComment}>{state ? 'Hide' : 'Show'} Comments</button>
               </div>


               {state && <CommentsList commentlist={comments}></CommentsList>}
          </div>
     )
}