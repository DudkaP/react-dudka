import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

export const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {/*{id}) {title} -- <Link to={id.toString()} state={post}>Get Details</Link>*/}
            {id}) {title} -- <Button to={id.toString()} state={post}>Get Details</Button>
        </div>
    );
};