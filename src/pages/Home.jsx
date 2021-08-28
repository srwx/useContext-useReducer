import { useEffect, useContext } from "react"
// Context
import { NumContext } from "../context/Context"

export default function Home() {
  const { numState, dispatch } = useContext(NumContext)
  useEffect(() => {
    dispatch({ type: "INCREASE" })
  }, [])

  return <div>{numState}</div>
}
