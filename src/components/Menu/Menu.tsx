import React, {FC, useReducer} from "react";
import { reducer, initialState } from "../../reducers/context";

const Menu: FC = () => {
     const [action, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col w-full">
      <div className="flex-[10] bg-white">dskfkds</div>
      <div className="flex flex-row flex-[90]">
        <div className="flex-[33] bg-red-600">
          {}
        </div>
        <div className="flex-[33] bg-indigo-700">dfds</div>
        <div className="flex-[33] bg-fuchsia-600">fsd</div>
      </div>
    </div>
  );
}

export default Menu;
