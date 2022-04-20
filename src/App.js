import React from 'react';
import {Cats, Dogs, Main} from "./components";

const App = () => {
    return (
        <div>
            <div align={'center'}>
                <Main/>
            </div>
            <div align={'center'}>
                <div style={{display: 'flex', }}><Dogs/></div>
                <div><Cats/></div>

            </div>
        </div>
    );
};

export default App;