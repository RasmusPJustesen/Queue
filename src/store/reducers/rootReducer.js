import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import queueReducer from './queueReducer';
import roomsReducer from './roomReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    queue: queueReducer,
    room: roomsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;