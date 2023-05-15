import { IAlbum } from "../types/AlbumTypes";

export const mutateAlbumsData = (albums: IAlbum[]) => {
     console.log(albums)
     return albums.map((e: IAlbum) => {
          return {
               label: e.title,
               key: e.id.toString()
          }
     })
}