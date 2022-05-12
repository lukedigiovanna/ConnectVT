import { ThunkAction } from 'redux-thunk';
import { CommentsActions } from './types';
import { StoreState } from '..';
import { Comment } from '../../models/comment';
import API from '../../api';
import endpoints from '../../api/endpoints';
import {
    fetchCommentsAction,
    fetchCommentsSuccessAction,
    fetchCommentsFailureAction
} from './action';

type Effect = ThunkAction<void, StoreState, undefined, CommentsActions>;

export const fetchComments = (): Effect => async(dispatch, getState) => {
    dispatch(fetchCommentsAction());

    try {
        // API.get(endpoints.comments()).then(response => {
        //     console.log(response);
        //     let comments = response.data as Comment[];
        //     console.log(comments);
        //     dispatch(fetchCommentsSuccessAction(comments));
        // });
        let response = await API.get(endpoints.comments());
        let comments = response.data as Comment[];
        console.log(comments);
        dispatch(fetchCommentsSuccessAction(comments));
    }
    catch {
        dispatch(fetchCommentsFailureAction());
    }
}
