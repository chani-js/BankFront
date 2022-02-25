import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import Home from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import SignIn from './pages/Signin'
import Profil from './pages/Profil';
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import PageNotFound from '../src/pages/PageNotFound'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="profil" element={<Profil />} />
          <Route element={<PageNotFound />} /> /*preparation pagenotfound erreur 404 pour les route qui n'existe pas */
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode >
  </Provider >
  ,
  document.getElementById('root')
);

