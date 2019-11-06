import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './Config/ReactotrtonConfig';

import GlobalStyle from './Styles/Global';
import Header from './Components/Header';
import Routes from './routes';

import store from './Store'

export default function src() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes />
        <GlobalStyle/>
      </BrowserRouter>
    </Provider>
  );
}
