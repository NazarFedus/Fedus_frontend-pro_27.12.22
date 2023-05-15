import React, { FC } from 'react'
import './styles.css'
import { IAlbumProps } from '../../../types/AlbumTypes'

const AlbumCard: FC<IAlbumProps> = ({title}) => {
  return (
    <div className='album_card'>
          <p>{title}</p>
          <button>Photo</button>
    </div>
  )
}

export default AlbumCard
