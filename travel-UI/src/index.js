import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './i18next';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <Suspense fallback={() => {}}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
