import { createStore, combineReducers } from "redux";
import homePage from './containers/HomePage/reducers';    // it gets it from the HomePage function inside index
import userPage from "./containers/UserPage/reducers";
// ALL the reducers go into this file to make it into the global redux store

const reducers = combineReducers({ homePage,userPage });   // is this a mistake?  should it be homePageReducer instead?

// export the actual store:
export default createStore(reducers);

