import './style.css'

type ITab = {
     category: string,
     onClick: (active: string) => void;
}

const Tab = (props: ITab) => {

     function clickToActive(e: React.MouseEvent<HTMLButtonElement>){
          props.onClick((e.currentTarget as HTMLButtonElement).innerText)
     }

     return (
          <button className="tab" onClick={clickToActive}>
               <p className='tab-name'>{props.category}</p>
          </button>
      );
}

export default Tab;