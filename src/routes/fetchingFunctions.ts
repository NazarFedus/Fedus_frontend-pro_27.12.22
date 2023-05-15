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

export const fetchAlbum = async (id: string) => {
     try{
          const album = await axios.get(`http://localhost:3000/albums/${id}`);
          const photos = await axios.get(`http://localhost:3000/photos/${id}`);
          return {
               album: album.data,
               photos: photos.data
          }
     }catch(e: any){
          console.log(e);
          throw Error;
     }
}