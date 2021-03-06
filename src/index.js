import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';
import Rank from './components/Rank';
import Particlebg from './components/Particlebg';


ReactDOM.render(
  <React.StrictMode>
    
    <Navbars/>
    <Rank/>
    <Box/>
    <Particlebg/>
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
