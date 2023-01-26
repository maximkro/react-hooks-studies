import React from "react";
import Buttons from "./Buttons";
import './myCard.css';

export const CallbackCounter = () => {
    const [count, setCounter] = React.useState(0);

    const onPlus = React.useCallback(() => setCounter((counter) => counter + 1), []);
    const onMinus = React.useCallback(() => setCounter((counter) => counter - 1), []);

    return (
        <div className="myCard">
            <h1 className="my-2">{count}</h1>
            <div>
                <Buttons onMinus={onMinus} onPlus={onPlus} />
            </div>

        </div>
    )

}