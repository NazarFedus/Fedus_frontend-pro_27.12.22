import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const SideBar = () => {

     const location = useLocation()
     console.log(location.pathname)
  return (
    <div className='sidebar-wrapper'>
          <div className='link-list'>
               <Link className={`link ${location.pathname === '/' && 'active-link'}`} to='/'>Home</Link>
               <Link className={`link ${location.pathname === '/search' && 'active-link'}`} to='/search'>Search</Link>
               <Link className={`link ${location.pathname === '/library' && 'active-link'}`} to='/library'>Library</Link>
          </div>
          <div className='link-list'>
               <Link className='link' to={'/create-playlist'}>Create Playlist</Link>
               <Link className='link' to={'/liked-songs'}>Liked songs</Link>
               <Link className='link' to={'/your-episodes'}>Your Episodes</Link>
          </div>
    </div>
  )
}

export default SideBar
