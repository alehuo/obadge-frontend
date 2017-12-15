import * as React from 'react';
import { Link } from 'react-router-dom';

interface IUserControlPanelState { }

interface IUserControlPanelProps { }

class UserControlPanel extends React.Component<IUserControlPanelProps,
    IUserControlPanelState> {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">User control panel</h1>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <aside className="menu">
                                <p className="menu-label">
                                    General
                            </p>
                                <ul className="menu-list">
                                    <li>
                                        <Link to="/user/settings/information">User information</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/settings/password">Change your password</Link>
                                    </li>
                                </ul>
                                <p className="menu-label">
                                    Payment options
                            </p>
                                <ul className="menu-list">
                                    <li>
                                        <Link to="/user/settings/payment/view">View payment options</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/settings/payment/add">Add a new payment option</Link>
                                    </li>
                                </ul>
                                <p className="menu-label">
                                    Address book
                            </p>
                                <ul className="menu-list">
                                    <li>
                                        <Link to="/user/settings/addressbook">View your addresses</Link>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column">
                            <section>
                                {this.props.children}
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UserControlPanel;