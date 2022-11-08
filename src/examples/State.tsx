import React, { useState, FC } from "react";

const State: FC = () => {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
    }
    return (
        <div >
            <h1>{counter}</h1>
            <button onClick={increment} className="btn btn-success">add</button>
            <button className="btn btn-danger">delete</button>
            <button className="btn btn-secondary">change title</button>
        </div>
    );
}

export default State;