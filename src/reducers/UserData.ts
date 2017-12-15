// Login reducer is used to handle the login process.
import { SET_DATA } from '../constants';

// Assign
const assign = Object.assign;

// Interface for initial state
export interface IUserDataInitialState {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

// Initial state of the app
const initialState: IUserDataInitialState = {
    id: 0,
    email: '',
    firstName: '',
    lastName: ''
};

export function userDataReducer(state: IUserDataInitialState = initialState, action: any): IUserDataInitialState {
    switch (action.type) {
        case SET_DATA:
            return assign({}, state, {
                id: action.userData.id,
                email: action.userData.email,
                firstName: action.userData.firstName,
                lastName: action.userData.lastName
            });
        default:
            return state;
    }
}