import axios from "axios"

export const getUser = async() => {
     try{
          const person = await axios.get('http://localhost:3000/appUsers');
          return person
     } catch(e){
          console.log(e)
     }

}