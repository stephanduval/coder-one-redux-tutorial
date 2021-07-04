// sectors grab data from the store 
// the value you are looking for can be an object inside of an object

import { createSelector } from "reselect";

// (state) here refers to the global state
// get the current homePage state from the store.js
const homePageState = (state) => state.homePage;  // state.name matches the name used in combine reducers in store.js

// this is the way way, but we will use the reselector module
// export const makeSelectUsers = homePage(state).user
// this will bind homePageUSers and return the users variable in the homePage part of the store
export const makeSelectUsers = createSelector(
    homePageState,
     homePage => homePage.users
     );