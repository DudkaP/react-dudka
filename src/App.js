import React from 'react';
import Counter from "./components/Counter";
import {Users} from "./components";
import Form from "./components/Form";

const App = () => {

    return (
        <div>
            <Counter/>
            <hr/>
            <Form/>
            <Users/>
        </div>
    );
};

export default App;