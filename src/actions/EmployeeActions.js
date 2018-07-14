import {
    EMPLOYEE_UPDATE
} from './type';

export const employeeUpdate = ({ props, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { props, value }
    };
};

