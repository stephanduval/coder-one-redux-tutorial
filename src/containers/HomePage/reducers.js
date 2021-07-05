// each page should have its own reducer file- this helps with maintenance
import { ActionTypes } from "./constants";
// reducers are a factory that makes changes to the redux global state... mosly updating the state
// the reducers need a default state:  That state is an object - This is the temporary redux store
const defaultState = {
    users: [],

};

export default function homePage(state = defaultState, action) {  // always uses the default state by default  | actions have two properties, the type of the action and the payload
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return { ...state, users: action.payload }; // the ... spread opertator copies the state object and we combies/overwrites the payload to the users object.
            // without the spread operator the entire state object will be replaced by action.payload
        default:
            return state;
    }
}


// a Store is a combination of all the Reducers; combined using the combineReducers() function