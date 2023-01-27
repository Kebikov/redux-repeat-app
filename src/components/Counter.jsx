import {dec, inc, rnd} from '../actions';

import { useSelector, useDispatch } from "react-redux";
//useSelector амтоматом получает state

const Counter = () => {
    const value = useSelector(state => state.value);
    const dispatch = useDispatch();

    return(
        <div className="jumbotron">
            <h1>{value}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

export default Counter;
