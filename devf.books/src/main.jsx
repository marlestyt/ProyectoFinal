import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/js/index.esm.js'
import MyRouter from './routers/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <MyRouter/>
  </React.StrictMode>,
)
//<App />