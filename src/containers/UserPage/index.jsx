import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, } from 'react-router';
import { setUser } from './actions';
import { createSelector } from 'reselect';
import { makeSelectUser } from './selectors';
import styled from "styled-components";


const UserContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const UserImage = styled.div`
width: 7em;
height: 7em;
img {
    width: 100%;
    height 100%;
}
`;

const UserName = styled.h3`
font-size: 20px;
color: #000;
margin: 0;
`;

const UserEmail = styled.h3`
font-size: 18px;
color: #111;
margin: 0;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}));

const actionDispatch = (dispatch) => ({
    setUser: (user) =>  dispatch(setUser(user)),
});jjjj

export function UserPage(props) {
    const { user }  = useSelector(stateSelector);
    const { setUser} = actionDispatch(useDispatch());
    console.log("user:", user);
    const { userId } = useParams();

    const fetchUser = async (id) => {
        const response = await axios.get(`https://reqres.in/api/users/${id}`).catch(
            (err) => {
            console.log("Err: ", err);
        });

        console.log("User: ", response.data.data);

        if(response)
            setUser(response.data.data);
    }

    useEffect(() => {
        if(userId && userId !== "")
            fetchUser(userId);

    }, [userId]);  // conly calls the function if the [userID] changes

    if(!user)
    return <div>Loading...</div>;

 
    return <UserContainer>
        <UserImage>
            <img src="user.avatar" alt=""/>
        </UserImage>
        <UserName>{ user.first_name } { user.last_name }</UserName>
        <UserEmail>{user.email}</UserEmail>
        </UserContainer>

}