import * as React from 'react';
import { IComment } from "../scripts/interfaces";
import CardComment from './CardComment';


export function CommentsList({commentlist}: {commentlist: IComment[]}){

     console.log(commentlist)

     function createComment(comment: IComment){
          return (
               <div>
                    <CardComment comment={comment}></CardComment>
               </div>
          )
     }

     console.log(commentlist)
     return (
          <div>
               {commentlist.map(comment => createComment(comment))}
          </div>
     );
}