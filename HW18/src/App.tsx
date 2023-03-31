import { useEffect, useState } from 'react'
import { fetching } from './scripts/GetData'
import {API, API_POSTS} from './scripts/constants'
import './App.css'
import { FindPost } from './components/FindPost';

function App() {

  const {getData} = fetching();
  useEffect(()=>{
    console.log(getData(API_POSTS)
    .then(res => console.log(res)));
  }, []);

  return (
    <div className="App">
      <FindPost></FindPost>
    </div>
  )
}

export default App
