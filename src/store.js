import { createStore, combineReducers } from "redux";
import homePage from './containers/HomePage/reducers';    
import userPage from "./containers/UserPage/reducers";
// ALL the reducers go into this file to make it into the global redux store

const reducers = combineReducers({ homePage, userPage });   // is this a mistake?  should it be homePageReducer instead? No see below
//It's the ES6 equivalent of this:
//const reducers = combineReducers({ homePage: homePageReducer,userPage : userPageReducer });  
// export the actual store:
export default createStore(reducers);

