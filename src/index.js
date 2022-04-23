import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(state='Hello', action) {
    return state + action.payload;
}

let store = createStore(reducer);


store.dispatch({type:'', payload:'!!!'})
console.log(store.getState())

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);