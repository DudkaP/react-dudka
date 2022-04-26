import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count1: 0,
    count2: 0
}

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        incCount1: (state) => {
            state.count1 += 1
        },
        decCount1: (state) => {
            state.count1 -= 1
        },
        resCount1: (state, action) => {
            state.count1 = action.payload || 0
        },
        incCount2: (state) => {
            state.count2 ++
        },
        decCount2: (state) => {
            state.count2 --
        },
        resCount2: (state, action) => {
            state.count2 = action.payload || 0
        }
    }
});

const {reducer:counterReducer, actions:{incCount1,decCount1,resCount1,incCount2,decCount2,resCount2}} = counterSlice;

export default counterReducer;
export const counterActions = {
    incCount1,
    decCount1,
    resCount1,
    incCount2,
    decCount2,
    resCount2
};