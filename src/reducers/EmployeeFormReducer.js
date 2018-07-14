import {
    EMPLOYEE_UPDATE
} from '../actions/type';

const INIATIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};

export default (state = INIATIAL_STATE, action) => {
    switch (action.type) {
    case EMPLOYEE_UPDATE:        
        return { ...state, [action.payload.prop]: action.payload.value };    
    default:
        return state;
    }
};
