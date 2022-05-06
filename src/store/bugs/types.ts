import { Action } from 'redux';
import { Bug } from '../../models/bug';

export interface BugsState {
    bugs: Bug[];
    isLoading: boolean;
}

export enum BugsActionTypes {
    FETCH_BUGS = "FETCH_BUGS",
    FETCH_BUGS_SUCCESS = "FETCH_BUGS_SUCCESS",
    FETCH_BUGS_FAILURE = "FETCH_BUGS_FAILURE",
    ADD_BUG = "ADD_BUG",
    ADD_BUG_SUCCESS = "ADD_BUG_SUCCESS",
    ADD_BUG_FAILURE = "ADD_BUG_FAILURE",
    DELETE_BUG = "DELETE_BUG",
    DELETE_BUG_SUCCESS = "DELETE_BUG_SUCCESS",
    DELETE_BUG_FAILURE = "DELETE_BUG_FAILURE",
    RESOLVE_BUG = "RESOLVE_BUG",
    RESOLVE_BUG_SUCCESS = "RESOLVE_BUG_SUCCESS",
    RESOLVE_BUG_FAILURE = "RESOLVE_BUG_FAILURE"
}

// gets all bugs from firebase
export interface FetchBugsAction extends Action {
    type: BugsActionTypes.FETCH_BUGS;
}

// adds the bugs to the store
export interface FetchBugsSuccessAction extends Action {
    type: BugsActionTypes.FETCH_BUGS_SUCCESS;
    bugs: Bug[];
}

export interface FetchBugsFailureAction extends Action {
    type: BugsActionTypes.FETCH_BUGS_FAILURE;
}

export type BugsActions = 
    FetchBugsAction | 
    FetchBugsSuccessAction |
    FetchBugsFailureAction;