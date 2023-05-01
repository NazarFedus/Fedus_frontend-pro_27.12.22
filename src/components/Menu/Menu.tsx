import React, { FC, useContext, useState, useEffect } from "react";
import { MenuContext } from "../../reducers/context";
import ProductCard from "../ui/ProductCard/ProductCard";
import { IProduct } from "./MenuTypes";
import ResultPopUp from "../ResultPopUp/ResultPopUp";

const Menu: FC = () => {
  const { state } = useContext(MenuContext);
  const [order, setOrder] = useState<string>('');
  const [showPopUp, setShowPopUp] = useState<boolean>(false)
  console.log(state);

  const showOrder = (): string => {
     const result = [];
     for(let key in state){
          let chosen = state[key].find((e: IProduct) => e.choosed === true)
          if(chosen !== undefined) result.push(chosen.name);
     }
     return result.filter(e => e !== undefined).join('+')
  }

  const handleToggle = () => {
     setShowPopUp(!showPopUp)
  }

  useEffect(() => {
     setOrder(showOrder())
  }, [state])

  return (
    <div className="flex flex-col w-full">
     {showPopUp && <ResultPopUp show={showPopUp} handleClose={handleToggle}></ResultPopUp>}
      <div className="flex flex-col flex-[10] bg-white justify-center items-center">
          <h3>{!order ? "You haven't chosen anything yet(" : `Your order: ${order}`}</h3>
          {order && <button className="custom-btn-result" onClick={() => setShowPopUp(true)}>Get Result</button>}
      </div>
      <div className="flex flex-row flex-[90]">
        <div className="category">
          {state.burgers.map((burger: IProduct) => (
            <ProductCard key={burger.id} product={burger}></ProductCard>
          ))}
        </div>
        <div className="category">
          {state.filling.map((filling: IProduct) => (
            <ProductCard key={filling.id} product={filling}></ProductCard>
          ))}
        </div>
        <div className="category">
          {state.supplements.map((supplement: IProduct) => (
            <ProductCard key={supplement.id} product={supplement}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
