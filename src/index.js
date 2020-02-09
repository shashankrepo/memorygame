import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './Context';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
