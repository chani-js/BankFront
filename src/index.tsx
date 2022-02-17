import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import Home from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import SignIn from './pages/Signin'
import User from './pages/User';
import { Provider } from 'react-redux'
import { store } from './stores/Store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="user" element={<User />} />
        </Routes>
        <Footer />
      </Router>

    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

