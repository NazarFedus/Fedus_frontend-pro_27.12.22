import React, {FC, useContext, useReducer} from "react";
import { reducer, initialState, MenuContext } from "../../reducers/context";

const Menu: FC = () => {
     const {state, dispatch} = useContext(MenuContext);
     console.log(state)
  return (
    <div className="flex flex-col w-full">
      <div className="flex-[10] bg-white">dskfkds</div>
      <div className="flex flex-row flex-[90]">
        <div className="flex-[33] bg-red-600">
          {state.burgers.map(burger => <p>{burger.size}</p>)}
        </div>
        <div className="flex-[33] bg-indigo-700">dfds</div>
        <div className="flex-[33] bg-fuchsia-600">fsd</div>
      </div>
    </div>
  );
}

export default Menu;
