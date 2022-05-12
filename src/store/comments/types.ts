import { Action } from "redux";
import { Comment } from '../../models/comment';

export interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = "FETCH_COMMENTS",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
}

export interface FetchCommentsAction extends Action {
    type: CommentsActionTypes.FETCH_COMMENTS;
}

export interface FetchCommentsSuccessAction extends Action {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    comments: Comment[];
}

export interface FetchCommentsFailureAction extends Action {
    type: CommentsActionTypes.FETCH_COMMENTS_FAILURE;
}

export type CommentsActions = FetchCommentsAction | FetchCommentsSuccessAction | FetchCommentsFailureAction;