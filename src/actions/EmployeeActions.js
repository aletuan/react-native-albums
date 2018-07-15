import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
} from './type';

export const employeeUpdate = ({ props, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { props, value },
    };
};

export const employeeCreate = ( {name, phone, shift }) => {
    console.log(name);
    return {
        type: EMPLOYEE_CREATE,
        payload: { name, phone, shift },
    };
};

