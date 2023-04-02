import axios from 'axios';
import React, { useState } from 'react';
import {API} from './constants'

export function getData(){
     const [data, setData] = useState<any>('');

     async function getPost(id: number) {
          try{
               const res = await axios.get(`${API}posts/${id}`)
               setData({
                    ...data,
                    post: res.data,
               })
               return res.data
          } catch(e){
               console.error(e)
               return {message: "Somehing wrong with requiest!"}
          }
     }

     async function getComment(id: number){
          const res = await axios.get(`${API}comments?postId=${id}`);
          setData({
               ...data,
               comments: res.data
          })
          return res.data
     }

     return {getPost, getComment}
}

