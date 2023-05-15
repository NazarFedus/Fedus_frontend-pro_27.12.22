import { IAlbum, TMutateAlbumsData } from "../types/AlbumTypes";

export const mutateAlbumsData = (albums: IAlbum[]): TMutateAlbumsData[]  => {
     return albums.map((e: IAlbum) => {
          return {
               label: e.title,
               key: e.id.toString()
          }
     })
}