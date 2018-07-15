import firebase from 'firebase';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLPOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
} from './type';

import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value },
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    // get current user
    const { currentUser } = firebase.auth();

    // get ref to location in data store
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({
                name, phone, shift
            })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.main({ type: 'reset' });
            });
    };
};

export const employeeSave = ({name, phone, shift, uid}) => {
    // update an existing record
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .set( {
                name, phone, shift
            })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.main({ type: 'reset' });
            });
    };
};

// dipatch employee list
// async operation
export const employeeFetch = () => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ 
                    type: EMPLPOYEE_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    };
};
