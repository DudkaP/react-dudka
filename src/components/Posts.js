import React, {useState} from 'react';
import {userService} from "../services";
import {Post} from "./Post";

export const Posts = ({posts}) => {

    return (
        <div>
            {posts && <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>}
        </div>
    );
};