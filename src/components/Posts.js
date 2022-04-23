import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const Posts = () => {

    const postsState = useSelector(state => state.postsState);

    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
                dispatch({type:'POSTS', payload: posts})
                console.log(posts)
            });
    },[])

    return (
        <div>
            {postsState.map(value=><div key={value.id}>{value.title}</div>)}
        </div>
    );
};