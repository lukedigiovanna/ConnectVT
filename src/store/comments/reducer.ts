import { Reducer } from 'redux';
import { CommentsActions, CommentsState, CommentsActionTypes } from './types';

const initialState: CommentsState = {
    comments: [],
    isLoading: false
}

const reducer: Reducer<CommentsState, CommentsActions> = (state = initialState, action) => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS:
            return {
                ...state, isLoading: true
            }
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state, comments: action.comments, isLoading: false
            }
        case CommentsActionTypes.FETCH_COMMENTS_FAILURE:
            return {
                ...state, isLoading: false
            }
        default:
            return state;
    }
}

export { 
    reducer as commentsReducer, 
    initialState as commentsInitialState 
};