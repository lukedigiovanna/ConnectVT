import { ThunkAction } from 'redux-thunk';
import { BugsActions } from './types';
import { StoreState } from '..';
import { Bug } from '../../models/bug';
import {
    fetchBugsAction,
    fetchBugsSuccessAction
} from './action';

type Effect = ThunkAction<void, StoreState, undefined, BugsActions>;

export const fetchBugs = (): Effect => async (dispatch, getState) => {
    dispatch(fetchBugsAction());

    const state = getState();
    const profile = state.firebase.profile;
    console.log(profile);

    dispatch(fetchBugsSuccessAction(
    [
        {
            id: 1,
            description: "Segmentation fault caused by line 63",
            isResolved: false
        },
        {
            id: 2,
            description: "Display not centered on dashboard",
            isResolved: false 
        },
        {
            id: 3,
            description: "API call to fetch posts results in 404 error",
            isResolved: true 
        }
    ]));
}