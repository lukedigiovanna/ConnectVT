import { Comment } from '../../models/comment';
import {
    CommentsActionTypes,
    FetchCommentsAction,
    FetchCommentsSuccessAction,
    FetchCommentsFailureAction
} from './types';

// generates the action content
export const fetchCommentsAction = (): FetchCommentsAction => ({
    type: CommentsActionTypes.FETCH_COMMENTS
});

export const fetchCommentsSuccessAction = (comments: Comment[]): FetchCommentsSuccessAction => ({
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
    comments
});

export const fetchCommentsFailureAction = (): FetchCommentsFailureAction => ({  
    type: CommentsActionTypes.FETCH_COMMENTS_FAILURE
});
