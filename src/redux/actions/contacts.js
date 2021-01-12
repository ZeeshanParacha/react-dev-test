import * as constants from "../constants";

function fetchContacts(data) {
    return {
        type: constants.FETCH_CONTACTS,
        payload: data
    };
}
function setCountry(data) {
    return {
        type: constants.SET_COUNTRY,
        payload: data
    };
}


export { fetchContacts , setCountry };