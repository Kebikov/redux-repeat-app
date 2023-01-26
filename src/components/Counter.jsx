
const Counter = ({inc, dec, rnd, count}) => {

    return(
        <div className="jumbotron">
            <h1>{ count }</h1>
            <button className="btn btn-primary" onClick={dec} >DEC</button>
            <button className="btn btn-primary" onClick={inc} >INC</button>
            <button className="btn btn-primary" onClick={() => rnd(56)} >RND</button>
        </div>
    )
}

export default Counter;