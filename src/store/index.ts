import thunk from 'redux-thunk';
import { FirebaseReducer, FirestoreReducer, firebaseReducer, getFirebase } from "react-redux-firebase";
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';
import { BugsState } from "./bugs/types";
import { bugsInitialState, bugsReducer } from './bugs/reducer';
import { User } from '../models/user';
import firebase, { rrfConfig } from '../constants/firebase';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// // structure of the store
export interface StoreState {
    firebase: FirebaseReducer.Reducer<User>,
    firestore: FirestoreReducer.Reducer,
    bugs: BugsState
};

const initialState = {
    bugs: bugsInitialState
}

const rootReducer = combineReducers<StoreState>({
    bugs: bugsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
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