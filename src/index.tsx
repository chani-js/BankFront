import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import Home from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import SignIn from './components/Signin';
import Profil from './pages/Profil';
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import PageNotFound from './pages/PageNotFound';
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />

    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

