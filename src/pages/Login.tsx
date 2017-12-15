import * as React from 'react';

import axios, { AxiosResponse } from 'axios';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// Login props
export interface ILoginProps {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  loginErrors: string[];
}

// Dispatch props
export interface ILoginDispatchProps {
  loggingIn: () => void;
  loggedIn: () => void;
  loginFailedInvalidCreds: () => void;
  loginFailedServerError: () => void;
  setData: () => void;
}

// Login state
export interface ILoginState {
  email: string;
  password: string;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  loginErrors: string[];
}

// Login component
class Login extends React.Component<ILoginProps & ILoginDispatchProps,
  ILoginState> {

  constructor(props: ILoginProps & ILoginDispatchProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggingIn: false,
      isLoggedIn: false,
      loginErrors: []
    };
  }

  handleEmailChange = (event: any): void => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event: any): void => {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit = (event: any): void => {
    event.preventDefault();
    this.login(this.state.email, this.state.password);
  }

  login = (email: String, password: String): void => {
    // Dispatch loggingIn -event
    this
      .props
      .loggingIn();
    // Post request to authentication service
    axios
      .post('/api/authentication', {
        email: this.state.email,
        password: this.state.password
      })
      .then((res: AxiosResponse) => {
        if (res.data.success) {
          // Login is a success. Redirect to front page
          this
            .props
            .loggedIn();
        }
      })
      .catch((err: Error) => {
        // Request failed
        this
          .props
          .loginFailedInvalidCreds();
      });
  }

  errorMsg = (message: String): React.ReactElement<{}> => {
    return <div className="notification is-danger">{message}</div>;
  }

  successMsg = (message: String): React.ReactElement<{}> => {
    return <div className="notification is-success">{message}</div>;
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" exact={true} />;
    }

    return (
      <section className="section">
        <form onSubmit={this.handleFormSubmit}>
          <div className="container">
            <h1 className="title">Login</h1>
            {this
              .props
              .loginErrors
              .map((entry) => this.errorMsg(entry))}
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  className={this.props.isLoggingIn
                    ? 'button is-success is-loading'
                    : 'button is-success'}
                  type="submit"
                >
                  Login
                </button>
              </p>

            </div>

          </div>
        </form>
      </section>
    );
  }
}

export function mapStateToProps({ login, user }: any) {
  return {
    isLoggingIn: login.isLoggingIn,
    isLoggedIn: login.isLoggedIn,
    loginErrors: login.loginErrors
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    loggingIn: () => dispatch({ type: 'LOGGING_IN' }),
    loggedIn: () => dispatch({ type: 'LOGGED_IN' }),
    loginFailedInvalidCreds: () => dispatch({ type: 'LOGIN_FAILED_INVALID_CREDS' }),
    loginFailedServerError: () => dispatch({ type: 'LOGIN_FAILED_SERVER_ERROR' }),
    setData: () => dispatch({ type: 'SET_DATA', userData: 'HelloWorld' })
  };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Login);