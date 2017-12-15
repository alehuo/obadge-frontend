import { combineReducers } from 'redux';

// Login reducer
import { loginReducer } from './Login';
// UserData reducer
import { userDataReducer } from './UserData';

// Combine reducers
const obadge = combineReducers({ user: userDataReducer, login: loginReducer });

export default obadge;