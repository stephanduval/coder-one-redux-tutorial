import { ActionTypes } from "./constants";

const defaultState = {
    user: null,

};

export default function userPage(state = defaultState, action) {  // always uses the default state by default  | actions have two properties, the type of the action and the payload
    switch (action.type) {
        case ActionTypes.SET_USER:
            return { ...state, user: action.payload }; // the ... spread opertator copies the state object and we combies/overwrites the payload to the users object.

        default:
            return state;
    }
}
