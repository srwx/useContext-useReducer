import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// Context
import ContextProvider from "./context/Context"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
