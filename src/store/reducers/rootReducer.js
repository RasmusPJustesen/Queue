import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import roomsReducer from './roomReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    room: roomsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;