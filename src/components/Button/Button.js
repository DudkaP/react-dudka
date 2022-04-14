import css from './Button.module.css';
import {Link} from "react-router-dom";

export const Button = ({state, to, children}) => {
    return (
        <Link to={to} state={state}>
            <button className={css.button}>
                {children}
            </button>
        </Link>
    );
};