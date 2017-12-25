// Login reducer is used to handle the login process.
import { SEARCH_STARTED, SEARCH_COMPLETE, SET_SEARCH_RESULTS } from '../constants';

// Assign
const assign = Object.assign;

// Interface for initial state
export interface ISearchInitialState {
    isSearching: boolean;
    results: SearchResult[];
}

export interface SearchResult {
    title: string;
    id: number;
}

// Initial state of the app
const initialState: ISearchInitialState = {
    isSearching: false,
    results: []
};

export function searchReducer(state: ISearchInitialState = initialState, action: any): ISearchInitialState {
    switch (action.type) {
        case SEARCH_STARTED:
            return assign({}, state, {
                isSearching: true,
                results: []
            });
        case SEARCH_COMPLETE:
            return assign({}, state, {
                isSearching: false,
                results: []
            });
        case SET_SEARCH_RESULTS:
            return assign({}, state, {
                results: action.results
            });
        default:
            return state;
    }
}