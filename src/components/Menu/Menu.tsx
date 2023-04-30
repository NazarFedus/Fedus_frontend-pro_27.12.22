import React, { FC, useContext, useReducer } from "react";
import { reducer, initialState, MenuContext } from "../../reducers/context";
import ProductCard from "../ui/ProductCard/ProductCard";
import { IProduct, IMenu } from "./MenuTypes";
import { IContextProps } from "../../reducers/contextTypes";

const Menu: FC = () => {
  const { state } = useContext(MenuContext);
  console.log(state);
  return (
    <div className="flex flex-col w-full">
      <div className="flex-[10] bg-white">dskfkds</div>
      <div className="flex flex-row flex-[90]">
        <div className="flex-[33] bg-red-600">
          {state.burgers.map((burger: IProduct) => (
            <ProductCard key={burger.id} product={burger}></ProductCard>
          ))}
        </div>
        <div className="flex-[33] bg-indigo-700">
          {state.filling.map((filling: IProduct) => (
            <ProductCard key={filling.id} product={filling}></ProductCard>
          ))}
        </div>
        <div className="flex-[33] bg-fuchsia-600">
          {state.supplements.map((supplement: IProduct) => (
            <ProductCard key={supplement.id} product={supplement}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
