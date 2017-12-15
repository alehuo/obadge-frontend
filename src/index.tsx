import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import obadge from './reducers/index';
import logger from './middleware/LoggerMiddleware';

// Bulma
import './../node_modules/bulma/css/bulma.css';

// FontAwesome
import './../node_modules/font-awesome/css/font-awesome.css';

let store = createStore(obadge, applyMiddleware(logger));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement);

registerServiceWorker();