import React, { FC } from 'react'

import { MenuContext, initialState, reducer } from '../reducers/context'

const MenuProvider: FC = ({children}) => {
     const [state, dispatch] = useReducer(reducer, initialState)

  return (
     <MenuContext.Provider value={{state, dispatch}}>
          {children}
     </MenuContext.Provider>
  )
}

export default MenuProvider
