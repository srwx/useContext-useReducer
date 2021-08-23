import { createContext, useReducer } from "react"
// Reducer function
import Reducer from "./Reducer"

export const numContext = createContext(0)

export default function Context({ children }) {
  const [numState, dispatch] = useReducer(Reducer, 0)
  return <div></div>
}
