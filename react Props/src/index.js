import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Component from './Component/Component';
// import Propsing from './Props/Propsing';
// import State from './State/State';
import Multiple from './MultipleState/Multiple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        {/* <Component/>
        <Propsing/> 
         <State/>  */}
        <Multiple/>
  </React.StrictMode>
);
reportWebVitals();