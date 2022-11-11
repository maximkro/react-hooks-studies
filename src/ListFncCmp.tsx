import React, { useState } from "react";

export const ListFncCmp: React.FC = () => {

    const [numbers, setNumbers] = useState<number[]>([1, 3, 4]);

    const addRandomNumber = (): void => {
        const randomNumber = Math.round(Math.random() * 10);
        setNumbers(prev => [...prev, randomNumber]);
    }

    // did Mount => []
    // did Mount, did Update => nothing as depend
    // did Updated (first time mount as well), 

    React.useEffect(() => {
        console.log('did Update');

        //will do anithing before component unmount
        return () => {
            console.log('component Unmount');
        }
    }, [numbers])
    return (
        <div>
            <ul className="list-group">
                {numbers.map((num, index) => <li className="list-group-item" key={index}>{num}</li>)}
            </ul>
            <button onClick={addRandomNumber} className="btn btn-warning">add Number</button>
        </div>
    );

}