import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'

import './Config/ReactotrtonConfig';

import GlobalStyle from './Styles/Global';
import Header from './Components/Header';
import Routes from './routes';

import history from './Services/history'
import store from './Store'

export default function src() {
  return (
    <Provider store={store}>
      <Router history={history}> 
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}
