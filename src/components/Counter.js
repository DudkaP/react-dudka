import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux";


const Counter = () => {

    const {count1, count2} = useSelector(state => state.counter);

    const dispatch = useDispatch();

    return (
        <div>
            Count1: {count1}
            <hr/>
            <button onClick={()=>dispatch(counterActions.incCount1())}>INC</button>
            <button onClick={()=>dispatch(counterActions.decCount1())}>DEC</button>
            <button onClick={()=>dispatch(counterActions.resCount1(4))}>RESET</button>
            <hr/>
            <hr/>
            <hr/>
            Count2: {count2}
            <hr/>
            <button onClick={()=>dispatch(counterActions.incCount2())}>INC</button>
            <button onClick={()=>dispatch(counterActions.decCount2())}>DEC</button>
            <button onClick={()=>dispatch(counterActions.resCount2(6))}>RESET</button>
        </div>
    );
};

export default Counter;