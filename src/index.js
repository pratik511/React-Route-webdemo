import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/index';


ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  ,document.getElementById('root')
);


