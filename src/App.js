import React, {useState} from 'react';
import {CarForm, Cars} from "./components";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [userForUpdate, setUserForUpdate] = useState(null);




    return (
        <div>
            <CarForm setNewCar={setNewCar} userForUpdate={userForUpdate} setUserForUpdate={setUserForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setUserForUpdate={setUserForUpdate} userForUpdate={userForUpdate}/>
        </div>
    );
};

export default App;