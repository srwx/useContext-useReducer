import { createContext, useReducer } from "react"
// Reducer function
import Reducer from "./Reducer"

export const NumContext = createContext(0)

export default function ContextProvider({ children }) {
  const [numState, dispatch] = useReducer(Reducer, 0)
  return (
    <NumContext.Provider value={{ numState, dispatch }}>
      {children}
    </NumContext.Provider>
  )
}
