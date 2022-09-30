
import React from 'react'
import ReactDOM from "react-dom/client"
import store from '../redux/store'
import { Provider } from 'react-redux'

import App from "./app"
import 'bootstrap-icons/font/bootstrap-icons.css'

const rootElement = document.getElementById("root")

if (rootElement){
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
