import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        addUser: (state, action) => {
            const {user} = action.payload;
            const newUser = {id:new Date().getTime(), name: user};
            state.users.push(newUser);
        },
        delUser: (state, action) => {
            const index = state.users.findIndex(value => value.id === action.payload.id);
            state.users.splice(index,1)
        }
    }
});

const {reducer:userReducer, actions:{addUser, delUser}} = userSlice;

export default userReducer
export const userActions = {addUser, delUser}