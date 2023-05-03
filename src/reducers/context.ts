import { createContext } from "react";
import { menu } from "../data/data.mock";
import { CHOOSE_BURGER, CHOOSE_FILLING, CHOOSE_SUPPLEMENTS, DELETE_FILLING, DELETE_SUPPLEMENTS } from "./actions";
import { IProduct, IMenu} from "../components/Menu/MenuTypes";
import { IAction } from "./contextTypes";

export const MenuContext = createContext({});

export const initialState = menu;

export const reducer = (state: IMenu, action: IAction): IMenu => {
     switch (action.type){
          case CHOOSE_BURGER: {
               return {...state, burgers: state.burgers.map((e: IProduct) => e.name === action.payload ? {...e, choosed: true} : {...e, choosed: false})}
          }
          case CHOOSE_FILLING: {
               if(state.burgers.find(e => e.choosed) === undefined) return {...state}
               return {...state, filling: state.filling.map((e: IProduct) => e.name === action.payload ? {...e, choosed: true} : {...e, choosed: false})}
          }
          case CHOOSE_SUPPLEMENTS: {
               if(state.burgers.find(e => e.choosed) === undefined) return {...state}
               return {...state, supplements: state.supplements.map((e: IProduct) => e.name === action.payload ? {...e, choosed: true} : {...e, choosed: false})}
          }

          case DELETE_FILLING: {
               return {...state, filling: state.filling.map((e: IProduct) => e.name === action.payload ? {...e, choosed: false} : {...e})}
          }
          case DELETE_SUPPLEMENTS: {
               return {...state, supplements: state.supplements.map((e: IProduct) => e.name === action.payload ? {...e, choosed: false} : {...e})}
          }
     }
}


