import {useEffect, useState} from "react";
import {postService} from "../services";
import {Post} from "../components";

export const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts(data));
    },[])

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};