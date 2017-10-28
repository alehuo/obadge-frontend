import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {loginReducer} from './reducers/Login';

// Bulma
import './../node_modules/bulma/css/bulma.css';

// FontAwesome
import './../node_modules/font-awesome/css/font-awesome.css';

let store = createStore(loginReducer);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}><App/></Provider>
</BrowserRouter>, document.getElementById('root')as HTMLElement);

registerServiceWorker();