export const PostDetail = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>Id: {id}</div>
            <div>User Id: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};