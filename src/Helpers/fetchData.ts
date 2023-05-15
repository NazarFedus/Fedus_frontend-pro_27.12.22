import axios from "axios";
import { IArtist } from "../components/ui/ArtistCard/ArtistCardTypes";

export const fetchAlbums = async (artist: IArtist) => {
  try {
    const response = await axios.get("http://localhost:3000/albums");
    const albums = response.data.filter(
      (album: IAlbum) => album.userId === artist.id
    );
    return albums;
  } catch (error) {
    console.log(error);
  }
};
