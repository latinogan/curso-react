import React from 'react';
import ReactDOM from 'react-dom/client';

// aqui añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import  'bootstrap-icons/font/bootstrap-icons.css'
// ! Importante    los estilos propios bootstrap deben ir debajo del bootstrap para que no nos pise.

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingone from './AppRoutingone';
import AppRoutingFinal from "./AppRoutingFinal"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/**<App />*/}
 { /**<AppRoutingone /> */} 
 <AppRoutingFinal/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
