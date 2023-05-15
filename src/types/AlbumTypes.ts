export interface IAlbumProps {
     key: number,
     title: string
}

export interface IAlbum {
     userId: number,
     id: number,
     title: string
}

export interface IFetchAlbum {
     album: IAlbum,
     photo: IPhoto
}
export interface IPhoto {
     albumId: number,
     id: number,
     thumbnailUrl: string,
     title: string,
     url: string
}

export type TMutateAlbumsData = Record<'label'|'key', string>