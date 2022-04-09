import React from 'react';

export const User = ({user, getUserId}) => {


    const {id,username} = user;
    return (
        <div>
            {id} -- {username} ---
            <button onClick={()=>getUserId(id)}>Information</button>

        </div>
    );
};
