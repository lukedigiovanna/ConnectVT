import { Reducer } from 'redux';
import { BugsActions, BugsState, BugsActionTypes } from './types';

const initialState: BugsState = {
    bugs: [],
    isLoading: false
}

const reducer: Reducer<BugsState, BugsActions> = (state = initialState, action) => {
    switch (action.type) {
        case BugsActionTypes.FETCH_BUGS:
            return {
                ...state, isLoading: true
            }
        case BugsActionTypes.FETCH_BUGS_SUCCESS:
            return {
                ...state, bugs: action.bugs, isLoading: false 
            }
        case BugsActionTypes.FETCH_BUGS_FAILURE:
            return {
                ...state, isLoading: false
            }
        default: 
            return state;
    }
}

export {
    reducer as bugsReducer,
    initialState as bugsInitialState
}