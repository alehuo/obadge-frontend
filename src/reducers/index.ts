import { combineReducers } from 'redux';

// Login reducer
import { loginReducer } from './Login';
// UserData reducer
import { userDataReducer } from './UserData';
// Search reducer
import { searchReducer } from './Search';

// Combine reducers
const obadge = combineReducers({ user: userDataReducer, login: loginReducer, search: searchReducer });

export default obadge;