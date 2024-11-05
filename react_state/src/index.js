import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import FunctionColor from './Component/FunctionColor';
// import Car from './Component/Car';
// import Scooter from './Component/Scooter';
// import Updateobject from './Component/Updateobject';
// import List from './Component/List';
import Timer from './Component/Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <FunctionColor /> */}
    {/* <Car/> */}
    {/* <Scooter/> */}
    {/* <Updateobject/> */}
    {/* <List/> */} 
    <Timer/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();