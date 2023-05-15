import axios from "axios";
import { IArtist } from "../components/ui/ArtistCard/ArtistCardTypes";
import { redirect } from "react-router-dom";
import { IAlbum, IFetchAlbum } from "../types/AlbumTypes";
import { IUser } from "../types/UserTypes";

export const fetchAlbums = async (artist: IArtist): Promise<IAlbum[]> => {
  try {
    const response = await axios.get("http://localhost:3000/albums");
    const albums = response.data.filter(
      (album: IAlbum) => album.userId === artist.id
    );
    return albums;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchArtists = async () => {
  const token = localStorage.getItem("token");
  if (!token) return redirect("/register");

  try {
    const artists = await axios.get(" http://localhost:3000/users");
    return artists.data;
  } catch (e: any) {
    console.log(e);
    throw Error;
  }
};

export const fetchUser = async (id: string) => {
  try {
    const user = await axios.get(`http://localhost:3000/users/${id}`);
    return user;
  } catch (e: any) {
    console.log(e);
    throw Error;
  }
};

export const fetchAlbum = async (id: string): Promise<IFetchAlbum> => {
  try {
    const album = await axios.get(`http://localhost:3000/albums/${id}`);
    const photo = await axios.get(`http://localhost:3000/photos/${id}`);
    return {
      album: album.data,
      photo: photo.data,
    };
  } catch (e: any) {
    console.log(e);
    throw Error;
  }
};
