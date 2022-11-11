import React from 'react';

const render = {
    count1: 0,
    count2: 0,
};

interface ICountProps {
    id: number,
    value: number
}

export default React.memo(
    function Count({ id, value }: ICountProps) {
        console.warn(`🛑 Count${id} render: ${++render[`count${id}` === "count1" ? "count1" : "count2"]}`);
        return (
            <div>
                <h1>{value}</h1>
            </div >
        );
    }
);