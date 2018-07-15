import firebase from 'firebase';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
} from './type';

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
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({
            name, phone, shift
        });
    return {
        type: EMPLOYEE_CREATE,
        payload: { name, phone, shift },
    };
};

