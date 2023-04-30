import { createContext, useReducer } from "react";
import { menu } from "../data/data.mock";

export const MenuContext = createContext({});

export const initialState = menu;

export const reducer = (state, action) => {
     switch (action.type){

     }
}