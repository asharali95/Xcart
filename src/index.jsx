import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import history from './history/history';
import ModalManager from './Components/ModalManager/ModalManager';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <Provider store ={store}>
      <ModalManager/>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
