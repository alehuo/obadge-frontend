// Login reducer is used to handle the login process.
import { LOGGING_IN, LOGGED_IN, LOGIN_FAILED_INVALID_CREDS, LOGIN_FAILED_SERVER_ERROR } from '../constants';

// Assign
const assign = Object.assign;

// Interface for initial state
export interface ILoginInitialState {
    isLoggingIn: boolean;
    isLoggedIn: boolean;
    loginErrors: string[];
}

// Initial state of the app
const initialState: ILoginInitialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    loginErrors: []
};

export function loginReducer(state: ILoginInitialState = initialState, action: any): ILoginInitialState {
    switch (action.type) {
        case LOGGING_IN:
            return assign({}, state, {
                isLoggingIn: true,
                isLoggedIn: false,
                loginErrors: []
            });
        case LOGGED_IN:
            return assign({}, state, {
                isLoggingIn: false,
                isLoggedIn: true,
                loginErrors: []
            });
        case LOGIN_FAILED_INVALID_CREDS:
            return assign({}, state, {
                isLoggingIn: false,
                iLloggedIn: false,
                loginErrors: ['Invalid e-mail address or password.']
            });
        case LOGIN_FAILED_SERVER_ERROR:
            return assign({}, state, {
                isLoggingIn: false,
                isLoggedIn: false,
                loginErrors: ['Error connecting to server.']
            });
        default:
            return state;
    }
}