import React, { FC } from 'react'
import './styles.css'
import { useLoaderData } from 'react-router-dom'
import ArtistCard from '../../components/ui/ArtistCard'
import { IArtist } from '../../components/ui/ArtistCard/ArtistCardTypes'

const Library: FC = () => {

  const artists = useLoaderData()
  console.log(artists)

  return (
    <div className='wrapper-page'>
          {artists.map((artist: IArtist) => <ArtistCard key={artist.id} artist={artist} />)}
    </div>
  )
}

export default Library
