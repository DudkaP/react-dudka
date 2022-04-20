import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks";

export const RequireAuth = ({children}) => {

    const location = useLocation();
    const {user} = useAuth();

    if (!user){
        return <Navigate to={'/login'} state={location}/>
    }

    return children;
};