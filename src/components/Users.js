import React, {useEffect, useState} from 'react';

import "../App.css"
import {userService} from "../services";
import {User} from "./User";
import {Posts} from "./Posts";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    const getUserId = async (id) => {
        const data = await userService.getById(id);
        setUser(data);
        console.log(id);
    }
    const getPostsById = async (id) => {
        const postData = await userService.getPostById(id);
        setPosts(postData.data);
        console.log(posts);
    }

    return (
        <div className={'divFlex'}>
            <div className={'usersWidth'}>{users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}</div>
            {
                user && <div>{user.data.username} <br /> {user.data.name} <br/>
                {user.data.email} <br/> {user.data.phone} <br/> {user.data.email}
                <button onClick={()=>getPostsById(user.data.id)}>Posts</button> <br/>
                    {posts && <div>{posts.map(post => <Posts key={post.id} post={post}/>)}</div>}
                </div>
            }

        </div>

    );
};