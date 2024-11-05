import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Garbage from './Component/Garbage';
import reportWebVitals from './reportWebVitals';
// import Gaba from './Props/Gaba';
import Adelaide from './Props/Adelaide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* Component Topic */}
      {/* <Garbage/> */}
      {/* Props Topic*/}
      {/* <Gaba/> */}
      <Adelaide />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
