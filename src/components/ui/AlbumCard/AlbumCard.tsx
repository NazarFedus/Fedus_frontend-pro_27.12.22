import React, { FC } from 'react'
import './styles.css'
import { IAlbumProps } from '../../../types/AlbumTypes'

const AlbumCard: FC<IAlbumProps> = ({title}) => {
  return (
    <div className=''>
          <p>{title}</p>
          <button>Show Photo</button>
    </div>
  )
}

export default AlbumCard
