import React from 'react'
import './styles.css'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar/SideBar'

const Layout = () => {
  return (
    <div className='wrapper'>
     <SideBar />
     <Outlet />
    </div>
  )
}

export default Layout
