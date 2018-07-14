import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SELECT_LIBRARY
} from './type';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const selectLibrary = (libraryId) => {
    return {
        type: SELECT_LIBRARY,
        payload: libraryId
    };
};

export const emailChanged = (text) => {   
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };

};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

// helper method
const loginUserSuccess = (dispatch, user) => {
    // one we know it is success
    // we need to navigate to another screen
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
   
    Actions.main();
};
