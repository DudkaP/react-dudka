import {useContext, useEffect, useState} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import {postService} from "../services";
import {Post} from "../components";
import {MyContext} from "../index";
import {queryAllByAttribute} from "@testing-library/react";

export const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const value = useContext(MyContext);

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        postService.getAll(query.get('page')).then(({data})=>setPosts(data));
    },[query])

    const nextPage = () => {
      // let page = query.get('page');
      // page++;
      // setQuery({page:page.toString()})
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++;
        setQuery(queryObj);
    }

    return (
        <div style={{display:"flex"}}>
            <div>
                {posts.map(post=><Post key={post.id} post={post}/>)}
                <button onClick={()=>nextPage()}>Next</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};