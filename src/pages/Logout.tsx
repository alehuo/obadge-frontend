import * as React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// Login props
export interface ILogoutProps {
    loggingOut: () => void;
    loggedOut: () => void;
    resetData: () => void;
}

// Dispatch props
export interface ILogoutDispatchProps {

}

// Login state
export interface ILogoutState {

}

// Login component
class Logout extends React.Component<ILogoutProps & ILogoutDispatchProps,
    ILogoutState> {

    constructor(props: ILogoutProps & ILogoutDispatchProps) {
        super(props);
    }

    render() {
        this.props.loggingOut();
        if (localStorage.getItem('token') !== null) {
            localStorage.clear();
        }
        this.props.resetData();
        this.props.loggedOut();
        return <Redirect to="/" exact={true} />;
    }
}

export function mapStateToProps({ login, user }: any) {
    return {

    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        resetData: () => dispatch({ type: 'RESET_DATA' }),
        loggingOut: () => dispatch({ type: 'LOGGING_OUT' }),
        loggedOut: () => dispatch({ type: 'LOGGED_OUT' }),
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Logout);