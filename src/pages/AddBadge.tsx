import * as React from 'react';

import axios, {AxiosResponse} from 'axios';

let Dropzone = require('react-dropzone').default;

interface IAddBadgeProps {}

interface IAddBadgeState {
  title : string,
  description : string,
  price : string,
  isAdding : boolean,
  addingSuccessful : boolean,
  errors : string[],
  accepted : File[],
  rejected : File[]
}

class AddBadge extends React.Component < IAddBadgeProps,
IAddBadgeState > {

  constructor(props : IAddBadgeProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      isAdding: false,
      addingSuccessful: false,
      errors: [],
      accepted: [],
      rejected: []
    };
  }

  handleTitleChange = (event : any) : void => {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange = (event : any) : void => {
    this.setState({description: event.target.value});
  }

  handlePriceChange = (event : any) : void => {
    this.setState({price: event.target.value});
  }

  handleFormSubmit = (event : any) : void => {
    event.preventDefault();
    this.setState({isAdding: true, errors: []});
    this.addBadge(this.state.title, this.state.description);
  }

  addBadge = (badgeTitle : String, badgeDescription : String) : void => {
    // Post request to user creation service
    axios
      .post('http://localhost:8080/api/badge', {
      title: badgeTitle,
      description: badgeDescription
    })
      .then((res : AxiosResponse) => {
        if (res.data.success) {
          console.log(res.data);
          this.setState({isAdding: false});
          this.setState({addingSuccessful: true});
        } else {
          // Authentication failed. Show errors from server.
          this.setState({errors: res.data.errors});
          this.setState({isAdding: false});
        }
      })
      .catch((err) => {
        // Request failed
        this.setState({errors: ['Error sending request to server, please try again later']});
        this.setState({isAdding: false});
      });
  }

  errorMsg = (message : String) : React.ReactElement < any > => {
    return <div className="notification is-danger">{message}</div>;
  }

  successMsg = (message : String) : React.ReactElement < any > => {
    return <div className="notification is-success">{message}</div>;
  }

  render() {

    var imgStyle = {
      margin: 10
    };

    var blockStyle = {
      display: 'inline-block'
    };

    // If the registration is successful show a message.
    if (this.state.addingSuccessful && !this.state.isAdding) {
      return (
        <div className="container">
          <h1 className="title">Add a new badge</h1>
          {this.successMsg('A new badge has been added.')}
        </div>
      );
    } else {
      return (

        <form onSubmit={this.handleFormSubmit}>
          <div className="container">
            <h1 className="title">Add a new badge</h1>
            {this
              .state
              .errors
              .map((entry : String) => this.errorMsg(entry))}
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-address-card"></i>
                </span>
              </p>
            </div>
            <div className="field has-addons">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Price per badge E.g. 2.50"
                  value={this.state.price}
                  onChange={this.handlePriceChange}/>
              </p>
              <p className="control">
                <a className="button is-static">
                  €
                </a>
              </p>
            </div>
            <div className="field">
              <Dropzone
                onDrop={(accepted : File[], rejected : File[]) => {
                this.setState({accepted, rejected});
              }}
                accept='image/jpg, image/jpeg, image/png'>
                <p>Drag and drop images here or click to browse.</p>
              </Dropzone>
              <section className="section">
                {this
                  .state
                  .accepted
                  .map((f : any) => <div className="block" style={blockStyle}>
                    <img src={f.preview} width={160} style={imgStyle}/>
                    <button className="delete is-small" onClick={() => {}}></button>
                  </div>)
}
              </section>
            </div>
            <div className="field">
              <p className="control">
                <button
                  className={this.state.isAdding
                  ? 'button is-success is-loading'
                  : 'button is-success'}
                  type="submit">
                  Add
                </button>
              </p>
            </div>
          </div>
        </form>
      );
    }

  }
}

export default AddBadge;
