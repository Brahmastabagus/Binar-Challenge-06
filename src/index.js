import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import "./assets/css/style.css"
import LandingPage from './pages/LandingPage';
import FindCars from './pages/FindCars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FindCars />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
