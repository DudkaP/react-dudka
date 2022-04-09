import React, {useState} from 'react';
import {userService} from "../services";

export const Posts = ({posts}) => {
    // const {id, post} = posts;
    // console.log(posts)

    return (
        <div>
            {posts}
        </div>
    );
};