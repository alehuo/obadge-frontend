import * as React from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';

interface IState {
  firstName : string,
  lastName : string,
  email : string,
  telephone : string,
  password : string,
  isRegistering : boolean,
  registrationSuccessful : boolean,
  termsAndConditionsChecked : boolean,
  errors : string[]
}

interface IProps {}

class Register extends React.Component < IProps,
IState > {

  state : IState;

  constructor(props : IProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      password: '',
      isRegistering: false,
      registrationSuccessful: false,
      termsAndConditionsChecked: false,
      errors: []
    };
  }

  handleFirstNameChange = (event : any) => {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange = (event : any) => {
    this.setState({lastName: event.target.value});
  }

  handleEmailChange = (event : any) => {
    this.setState({email: event.target.value});
  }

  handleTelephoneChange = (event : any) => {
    this.setState({telephone: event.target.value});
  }

  handlePasswordChange = (event : any) => {
    this.setState({password: event.target.value});
  }

  handleFormSubmit = (event : any) => {
    event.preventDefault();
    this.setState({isRegistering: true, errors: []});
    this.register(this.state.firstName, this.state.lastName, this.state.email, this.state.telephone, this.state.password);
  }

  /**
   * Registers a user.
   *
   * @memberof Register
   */
  register = (firstName : String, lastName : String, telephone : String, email : String, password : String) => {
    // Post request to user creation service
    axios
      .post('/api/user', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      telephone: this.state.telephone,
      password: this.state.password
    })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          this.setState({isRegistering: false});
          this.setState({registrationSuccessful: true});
        } else {
          // Authentication failed. Show errors from server.
          this.setState({errors: res.data.errors});
          this.setState({isRegistering: false});
        }
      })
      .catch((err) => {
        // Request failed
        this.setState({errors: ['Error sending request to server, please try again later']});
        this.setState({isRegistering: false});
      });
  }

  errorMsg = (message : String) : React.ReactElement < {} > => {
    return <div className="notification is-danger">{message}</div>;
  }

  successMsg = (message : String) : React.ReactElement < {} > => {
    return <div className="notification is-success">{message}</div>;
  }

  termsAndConditionsChange = (event : any) : void => {
    this.setState({
      termsAndConditionsChecked: !this.state.termsAndConditionsChecked
    });
  }

  render() {
    // If the registration is successful show a message.
    if (this.state.registrationSuccessful && !this.state.isRegistering) {
      return (
        <div className="container">
          <h1 className="title">Register</h1>
          {this.successMsg("Your account has been created successfully. Please follow the link sent to your " +
              "email to activate your account.")}
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <div className="container">
            <h1 className="title">Register</h1>
            {this
              .state
              .errors
              .map((entry : String) => this.errorMsg(entry))}
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="First name"
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-address-card"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Last name"
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-address-card"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Telephone"
                  value={this.state.telephone}
                  onChange={this.handleTelephoneChange}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-phone"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
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
                  onChange={this.handlePasswordChange}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  type="checkbox"
                  name="termsAndConditions"
                  onChange={this.termsAndConditionsChange}
                  checked={this.state.termsAndConditionsChecked}/>
                I agree to the
                <Link to="/terms_and_conditions" target="_blank">Terms and conditions</Link>
                of this service
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  disabled={!this.state.termsAndConditionsChecked}
                  className={this.state.isRegistering
                  ? "button is-success is-loading"
                  : "button is-success"}
                  type="submit">
                  Register
                </button>
              </p>
            </div>
          </div>
        </form>
      );
    }

  }
}

export default Register;
