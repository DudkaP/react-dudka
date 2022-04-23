import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadPosts} from "../redux/actions";

export const Posts = () => {

    const postsState = useSelector(state => state.postsState);

    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
                loadPosts(posts, dispatch)
                console.log(posts)
            });
    },[])

    return (
        <div>
            {postsState.map(value=><div key={value.id}>{value.title}</div>)}
        </div>
    );
};