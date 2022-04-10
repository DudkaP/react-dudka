import React from 'react';

export const Post = ({post}) => {
    const {id,body, title} = post;
    console.log(post)
    // console.log(title)

    return (
        <div>
            {id} - {body} - {title}
        </div>
    );
};