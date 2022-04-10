import React, {useEffect, useState} from 'react';

import "../App.css"

import {userService} from "../services";
import {User} from "./User";

export const Users = ({getPostsById}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    const getUserId = async (id) => {
        const data = await userService.getById(id);
        setUser(data);
        // console.log(id);
    }

    return (
        <div className={'divFlex'}>
            <div className={'usersWidth'}>{users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}</div>
            {
                user && <div>{user.data.username} <br /> {user.data.name} <br/>
                {user.data.email} <br/> {user.data.phone} <br/> {user.data.email}
                <button onClick={()=>getPostsById(user.data.id)}>Posts</button> <br/>

                </div>
            }

        </div>

    );
};