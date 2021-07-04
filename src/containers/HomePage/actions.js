import { ActionTypes } from "./constants";

export const setUsers = (users) => ({
    type: ActionTypes.SET_USERS,  // from the constants file
    payload: users
})