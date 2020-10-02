import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './appRoute';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
      <AppRoute />
    </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
