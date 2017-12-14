import * as React from 'react';

interface IUserControlPanelState { }

interface IUserControlPanelProps { }

class UserControlPanel extends React.Component<IUserControlPanelProps,
    IUserControlPanelState> {
    render() {
        return (
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
                                    <a>User information</a>
                                </li>
                                <li>
                                    <a>Change your password</a>
                                </li>
                            </ul>
                            <p className="menu-label">
                                Payment options
                            </p>
                            <ul className="menu-list">
                                <li>
                                    <a>View payment options</a>
                                </li>
                                <li>
                                    <a>Add a new payment option</a>
                                </li>
                            </ul>
                            <p className="menu-label">
                                Address book
                            </p>
                            <ul className="menu-list">
                                <li>
                                    <a>View your addresses</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="column">
                        <section>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem
                            ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor
                            sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor
                            sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
                            dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem
                            ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet.
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserControlPanel;