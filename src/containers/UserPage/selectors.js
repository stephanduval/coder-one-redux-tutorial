import { createSelector } from "reselect";

const userPageState = (state) => state.userPage;  

export const makeSelectUser = createSelector(
    userPageState,
     userPage => userPage.user
     );


     /*   a NOTE ON createSelector from: https://github.com/reduxjs/reselect#creating-a-memoized-selector

    Reselect provides a function createSelector for creating memoized selectors. createSelector takes an array of
    input-selectors and a transform function as its arguments. If the Redux state tree is mutated in a way that
    causes the value of an input-selector to change, the selector will call its transform function with the values
    of the input-selectors as arguments and return the result. If the values of the input-selectors are the same
    as the previous call to the selector, it will return the previously computed value instead of calling the
    transform function.


     */