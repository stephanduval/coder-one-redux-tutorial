import { ActionTypes } from "./constants";

export const setUser = (user) => ({
    type: ActionTypes.SET_USER,  // from the constants file
    payload: user,
})