import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useParams, } from 'react-router';
import { setUser } from './actions';

const actionDispatch = (dispatch) => ({
    setUser: (user) =>  dispatch(setUser(user))
});

export function UserPage(props) {
    const { setUser} = actionDispatch(useDispatch());

    const { userId } = useParams();

    const fetchUser = async (id) => {
        const response = await axios.get(`https://reqres.in/api/users/${id}`).catch(
            (err) => {
            console.log("Err: ", err);
        });

        console.log("User: ", response.data.data);


        if(response)
            setUser(response.data.data);
    };

    useEffect(() => {
        if(userId && userId !== "")
            fetchUser(userId);

    }, [userId]);  // conly calls the function if the [userID] changes

 
    return <div> TEST

  

    </div>;
}