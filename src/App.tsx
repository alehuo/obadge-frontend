import * as React from 'react';

import { connect } from 'react-redux';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Info from './pages/Info';
import AddBadge from './pages/AddBadge';
import UserControlPanel from './pages/UserControlPanel';

import axios, { AxiosResponse } from 'axios';

// Nav
import Navigation from './components/Navigation';

// Routing
import { Route } from 'react-router-dom';
import { withRouter, Switch } from 'react-router';
import AddressBook from './pages/AddressBook';
import NotFound from './pages/NotFound';

// App props
export interface IAppProps {
}

export interface IAppDispatchProps {
  setData?: (data: any) => void;
  loggedIn?: () => void;
}

// App state
export interface IAppState {

}

class App extends React.Component<IAppProps & IAppDispatchProps,
  IAppState> {

  constructor(props: IAppProps & IAppDispatchProps) {
    super(props);
    this.state = {
      id: -1,
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  componentDidMount() {
    axios.get('/api/authentication').then((res: AxiosResponse) => {
      if (this.props.setData !== undefined && this.props.loggedIn !== undefined) {
        this.props.setData(JSON.parse(res.data.payload.data)[0]);
        this.props.loggedIn();
      }
    }).catch((err: any) => {
      // console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact={true} path="/" component={Info} />
          <Route exact={true} path="user/login" component={Login} />
          <Route exact={true} path="user/register" component={Register} />
          <Route exact={true} path="badge/add" component={AddBadge} />
          <Route path="/user/settings" component={UserControlPanel}>
            <Route path="addressbook" component={AddressBook} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export function mapStateToProps(state: IAppState) {
  return {};
}

export function mapDispatchToProps(dispatch: any) {
  return {
    setData: (data: any) => dispatch({ type: 'SET_DATA', userData: data }),
    loggedIn: () => dispatch({ type: 'LOGGED_IN' })
  };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(App));