import * as constants from '../constants'

const INITIAL_STATE = {
    contacts: [],
    checker: "All"
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case constants.FETCH_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
            };
        case constants.SET_COUNTRY:
            return {
                ...state,
                checker: action.payload,
            };
        default:
            return state;
    }
};
