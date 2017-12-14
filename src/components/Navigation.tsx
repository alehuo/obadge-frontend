import * as React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Navigation props
interface INavigationProps {
  isLoggedIn: boolean;
}

// Navigation state
interface INavigationState {
  isLoggedIn: boolean;
}

class Navigation extends React.Component<INavigationProps,
  INavigationState> {

  constructor(props: INavigationProps) {
    super(props);
  }

  render() {

    return (
      <nav className="navbar is-link">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="subtitle" src="/logo.png" />
          </Link>
        </div>
        <div className="navbar-menu">
          {this.props.isLoggedIn
            ? <div className="navbar-start">
              <Link className="navbar-item" to="/about">Browse badges</Link>
              <div className="navbar-item">
                <p className="control has-icons-left is-loading">
                  <span className="icon is-small is-left">
                    <i className="fa fa-search" />
                  </span>
                  <input className="input" type="text" placeholder="Search for overall badges.." />
                </p>
              </div>
            </div>
            : null}
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Account
              </a>
              <div className="navbar-dropdown is-boxed is-right">
                {!this.props.isLoggedIn
                  ? (
                    <div>
                      <Link className="navbar-item" to="/user/login">Login</Link>
                      <Link className="navbar-item" to="/user/register">Register</Link>
                    </div>
                  )
                  : (
                    <div>
                      <a className="navbar-item ">
                        <span className="icon">
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        My orders
                      </a>
                      <a className="navbar-item">
                        <span className="icon">
                          <i className="fa fa-cog" aria-hidden="true" />
                        </span>
                        Settings
                      </a>
                      <a className="navbar-item">
                        <span className="icon">
                          <i className="fa fa-sign-out" aria-hidden="true" />
                        </span>
                        Logout
                      </a>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  }
}

export function mapStateToProps(state: INavigationState) {
  return { isLoggedIn: state.isLoggedIn };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mergeProps)(Navigation);
