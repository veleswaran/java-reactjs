import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetApi from './Components/GetApi';
import PostApi from './Components/PostApi';
import GetApiId from './Components/GetApiId';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GetApiId userId={52}/>
    {/* <PostApi/> */}
    {/* <GetApi/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

 