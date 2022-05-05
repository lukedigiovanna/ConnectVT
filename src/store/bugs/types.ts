import { Action } from 'redux';
import { Bug } from '../../models/bug';

export interface BugState {
    bugs: Bug[];
    isLoading: boolean;
}

export enum BugActionTypes {
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

export interface FetchBugsAction extends Action {
    type: BugActionTypes.FETCH_BUGS;
}

export interface FetchBugsSuccessAction extends Action {
    type: BugActionTypes.FETCH_BUGS_SUCCESS;
    bugs: Bug[];
}

export type BugsAction = FetchBugsAction | FetchBugsSuccessAction;