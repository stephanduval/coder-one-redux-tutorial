// each page should have its own reducer file- this helps with maintenance

// reducers are a factory that makes changes to the redux global state... mosly updating the state
// the reducers need a default state:  That state is an object - This is the temporary redux store
const defaultState = {};

export default function homePageReducer(state = defaultState, action) {  // always uses the default state by default  | actions have two properties, the type of the action and the payload
    switch (action.type) {
        default:
            return state;
    }
}


// a Store is a combination of all the Reducers; combined using the combineReducers() function