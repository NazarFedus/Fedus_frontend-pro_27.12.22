import { useEffect, useState } from 'react';
import axios from 'axios'
import './style.css'
import Tab from './tab/Tab';

type ISideBar = {
     onActive: (active: string) => void;
}

export default function SideBar(props: ISideBar){

     const [catalog, setCatalog] = useState([]);
     const [activeCategory, setActiveCategory] = useState<string>('');

     useEffect(() => {
          async function fetchCatalog(){
               const data = await axios.get('https://fakestoreapi.com/products/categories');
               setCatalog(await data.data)
          }
          fetchCatalog()
     }, [])

     console.log(catalog)

     function clickToActive(active: string){
          console.log(`From sidebar: ${active}`)
          setActiveCategory(active)
          props.onActive(active)
     }


     return(
          <div className='catalog'>
               {catalog.map(element => <Tab category={element} key={catalog.indexOf(element)} onClick={clickToActive}></Tab>)}
          </div>
     );
}