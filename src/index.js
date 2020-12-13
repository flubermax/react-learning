import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './scss/app.scss';
import App from './App';

ReactDOM.render(
  <Router>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </Router>,
  document.getElementById('root'),
);

