import React from 'react';

import './App.css';
import {Posts, User, Users} from "./components";

export const App = () => {
    return (
        <div>
            <div className={'divFlex'}>
                <div className={'usersWidth'}><User/></div>
                <div className={'usersWidth'}><Users/></div>
            </div>
            <div><Posts/></div>

        </div>
    );
};
export default App