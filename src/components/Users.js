import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const Users = () => {

    const usersState = useSelector(state => state.usersState);

    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                dispatch({type:'USERS', payload: users})
                console.log(users)
            });
    },[])

    return (
        <div>
            {usersState.map(value=><div key={value.id}>{value.name}</div>)}
        </div>
    );
};