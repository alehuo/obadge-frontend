import * as React from 'react';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Info from './pages/Info';
import AddBadge from './pages/AddBadge';
import UserControlPanel from './pages/UserControlPanel';

// Nav
import Navigation from './components/Navigation';

// Routing
import {Route} from 'react-router-dom';

// Login recucer
import {loginReducer} from './reducers/Login';

// App props
interface IAppProps {}

// App state
interface IAppState {
  loggedIn : boolean;
  loggingIn : boolean;
}

// Create the store
let store = createStore(loginReducer);

class App extends React.Component < IAppProps,
IAppState > {

  constructor(props : IAppProps) {
    super(props);
    this.state = {
      loggedIn: false,
      loggingIn: false
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation/>
          <Route exact path="/" component={Info}/>
          <section className="section">
            <Route path="/user/login" component={Login}/>
            <Route path="/user/register" component={Register}/>
            <Route path="/badge/add" component={AddBadge}/>
            <Route path="/user/settings" component={UserControlPanel}/>
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
