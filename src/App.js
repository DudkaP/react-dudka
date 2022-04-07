import React from 'react';
import {Posts, UserDetails, Users} from "./components";

export const l = () => {
    return (
        <div>
            <div className={'divFlex'}>
                <div><Users/></div>
                <div><UserDetails/></div>
            </div>
            <div><Posts/></div>

        </div>
    );
};
export default class App {
}