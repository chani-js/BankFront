import React, { Fragment } from 'react';
import Header from './components/Header';
import './index.css';
import Home from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import SignIn from './pages/Signin';
import Profil from './pages/Profil';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return <React.Fragment>
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={< Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path='/profil' element={<Profil />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  </React.Fragment>

}
export default App

