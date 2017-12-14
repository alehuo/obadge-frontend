import { combineReducers } from 'redux';

// Data reducer
import { loginReducer } from './Login';

// Combine reducers
const obadge: {} = combineReducers<{}>({ loginReducer });

export default obadge;