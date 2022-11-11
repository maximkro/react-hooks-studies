import React from 'react';
import Count from './Count';
import IsFive from './IsFive';

export const MemoCounter = () => {
    const [count1, setCount1] = React.useState(0);
    const [count2, SetCount2] = React.useState(0);

    return (
        <div>
            <h5>Counter 1: </h5>
            <div className="counter">
                <button onClick={() => setCount1(count1 + 1)}>+</button>
                <Count id={1} value={count1} />
            </div>

            <h5>Counter 2: </h5>
            <div className="counter">
                <button onClick={() => SetCount2(count2 + 1)}>+</button>
                <Count id={2} value={count2} />
            </div>
            <IsFive value={count2} />
        </div>


    )
}