import axios from 'axios';
import React, { useState } from 'react';

// interface Idata{

// }


export function fetching(){
     const [data, setData] = useState<any>('');

     async function getData(API: string) {
          try{
               await axios.get(API).then(res => setData(res.data))
               return data
          } catch(e){
               console.error(e)
               return {message: "Somehing wrong with requiest!"}
          }
     }

     return {getData}
}

