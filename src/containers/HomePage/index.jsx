import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import { setUsers } from './actions';
import Axios from 'axios';  // API support

// define the state of a variable with the selection function and a call backfundion
// this takes the object of the homePage store state and creates an object out of the users object within the homePage object
const userStateSelector =createSelector(makeSelectUsers, (users) => ({
    users
}));

//dispatch function will dispact an action to the apropriate reducer using the switch in the reducer.js file
// this constant will give users as a parameter to setUsers (in the actions.js file)
// that will set the object with the type: and payload: to users 
// and give that as a parameter to the dispatch function.  
const actionDispatch = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users)),
});

export function HomePage(props) {
    // this is a great hook for accessing the users
    //  the StateSelector returns the homepage users object and that is sent
    // to the react-redux useSelector (a hooks technique) which returns the users
    //value from the store
    const { users } = useSelector(userStateSelector);  //grabs the redux store and provides it with the stateSelector
    const { setUser} = actionDispatch(useDispatch());

    const fetchUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users?page=2").catch(
            (err) => {
            console.log ("Err: ", err);
            }
        );

        setUser( response.data.data);

        console.log("Users", response.data.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

        console.log("Users:" , users)

    return <div>Hello World!</div>;
}