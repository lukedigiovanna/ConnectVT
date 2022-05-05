// import { FirebaseReducer, FirestoreReducer } from "react-redux-firebase";
// import { BugState } from "./bugs/types";
// import { User } from '../models/user';

// // structure of the store
// export interface StoreState {
//     firebase: FirebaseReducer.Reducer<User>,
//     firestore: FirestoreReducer.Reducer,
//     bugs: BugState
// };


// let's just do a simple example to get started.
import { createStore } from 'redux';

const initialState = {
    todos: []
}

const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.todo]};
        default:
            return state;
    }
};

export const store = createStore(
    rootReducer,
    initialState,
)
