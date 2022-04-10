import React, {useState} from 'react';

import './App.css';
import {Posts, Users} from "./components";
import {userService} from "./services";

export const App = () => {

    const [posts, setPosts] = useState(null);


    const getPostsById = async (id) => {
        const postData = await userService.getPostById(id);
        setPosts(postData.data);
        console.log(posts);
    }


    return (
        <div>
            <div className={'divFlex'}>
                <div className={'usersWidth'}><Users getPostsById={getPostsById}/></div>
            </div>
            <Posts posts={posts}/>

        </div>
    );
};
export default App