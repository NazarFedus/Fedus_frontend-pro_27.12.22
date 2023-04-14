import { useState } from 'react'
import './styles/reset.css'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/SideBar'
import Main from './components/main/Main'


function App() {

  const [active, setActive] = useState<string>('');

  function handleActive(activeCategory: string){
    console.log(activeCategory)
    setActive(activeCategory)
  }

  return (
    <div className="App">
      <Header />
      <Sidebar onActive={handleActive}/>
      <Main activeValue={active}/>
    </div>
  )
}

export default App
