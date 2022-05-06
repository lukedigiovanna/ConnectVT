import { Bug } from '../../models/bug';
import {
    BugsActionTypes,
    FetchBugsAction,
    FetchBugsSuccessAction,
}
from './types';

export const fetchBugsAction = (): FetchBugsAction => ({
    type: BugsActionTypes.FETCH_BUGS 
})

export const fetchBugsSuccessAction = (bugs: Bug[]): FetchBugsSuccessAction => ({
    type: BugsActionTypes.FETCH_BUGS_SUCCESS,
    bugs
})