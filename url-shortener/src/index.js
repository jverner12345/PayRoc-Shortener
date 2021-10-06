import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Redirect from './components/Redirect'
import MainPage from './screens/MainPage';
ReactDOM.render(
  
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <NavBar />
      <App />
      <Route path="/Redirect" component={Redirect} />
      <Route path="/home" component={MainPage} />
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
