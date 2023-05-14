import axios from 'axios'
import { getUser } from '../Helpers/formFunctions';
import { redirect } from 'react-router-dom';

export const fetchArtists = async () => {
     const token = localStorage.getItem('token')
     if(!token) return redirect('/register')

     try{
          const artists = await axios.get(' http://localhost:3000/users')
          return artists.data;
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

// export const fetchArtistAvatar = async () => {
//      try {
//           const artistAvatar = await axios.get('https://randomuser.me/api/portraits/men/75.jpg');
//           return artistAvatar
//      } catch(e) {
//           console.log(e)
//      }
// }