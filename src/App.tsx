import React, { Fragment } from 'react';
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
import PrivateRoute from './feature/PrivateRoute';

const App = () => {
  const token = localStorage.getItem("token")
  return <React.Fragment>
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={< Home />} />
          <Route path="sign-in" element={<SignIn />} />

          <Route path="/profil" element={< PrivateRoute auth={!!token} />} >
            <Route path='/profil' element={<Profil />} />
          </Route>
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  </React.Fragment>

}
export default App

