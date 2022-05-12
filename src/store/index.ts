import thunk from 'redux-thunk';
import { FirebaseReducer, FirestoreReducer, firebaseReducer, getFirebase } from "react-redux-firebase";
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';
import { BugsState } from "./bugs/types";
import { bugsInitialState, bugsReducer } from './bugs/reducer';
import { User } from '../models/user';
import firebase, { rrfConfig } from '../constants/firebase';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CommentsState } from './comments/types';
import { commentsInitialState, commentsReducer } from './comments/reducer';

// // structure of the store
export interface StoreState {
    firebase: FirebaseReducer.Reducer<User>,
    firestore: FirestoreReducer.Reducer,
    bugs: BugsState,
    comments: CommentsState
};

const initialState = {
    bugs: bugsInitialState,
    comments: commentsInitialState
}

const rootReducer = combineReducers<StoreState>({
    bugs: bugsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    comments: commentsReducer
});


export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunk.withExtraArgument(getFirebase)
    )
)

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}