import {combineReducers, createStore} from "redux";
import {userReducer} from "./user.reducer";
import {postsReducer} from "./posts.reducer";

let reducer = combineReducers({usersState:userReducer,postsState:postsReducer});

export let store = createStore(reducer);
