import firebase from 'firebase';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
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

