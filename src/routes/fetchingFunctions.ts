import axios from 'axios'

export const fetchUsers = async () => {
     try{
          const users = await axios.get(' http://localhost:3000/users')
          return users.data;
     }catch(e: any){
          console.log(e);
          throw Error
     }
}

export const fetchUser = async (id: string) => {
     try{
          const user = await axios.get(`http://localhost:3000/users/${id}`);
          return user;
     }catch(e: any){
          console.log(e);
          throw Error;
     }
}