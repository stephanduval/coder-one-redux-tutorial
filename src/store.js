import { createStore, combineReducers } from "redux";
import homePage from './containers/HomePage/reducers';    // is this a mistake?  should it be homePageReducer instead?

// ALL the reducers go into this file to make it into the global redux store

const reducers = combineReducers({ homePage });   // is this a mistake?  should it be homePageReducer instead?

// export the actual store:
export default createStore(reducers);

