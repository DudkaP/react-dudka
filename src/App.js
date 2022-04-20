import React, {useReducer} from 'react';
import {Cats, Dogs, Main} from "./components";

function init(count) {
    return {
        dog: count,
        cat: count
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'dog':
            return {...state, dog: state.dog + 1}
        case 'cat':
            return {...state, cat: state.cat + 1}
        case 'start':
            return {cat: 0, dog: 0}
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div align={'center'}>
            <div style={{marginTop: '30px'}}>
                <button onClick={() => dispatch({type: 'dog'})}>Dog</button>
                ----------
                <button onClick={() => dispatch({type: 'start'})}>Start</button>
                ----------
                <button onClick={() => dispatch({type: 'cat'})}>Cat</button>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'center', width: '800px'}}>
                <div style={{marginRight: '100px'}}>
                    <Dogs key={state.dog} dogPage={state.dog}/>

                </div>
                <div style={{marginLeft: '100px'}}>
                    {state.cat}
                </div>

            </div>
        </div>
    );
};

export default App;