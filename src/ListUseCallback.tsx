import React from "react";



export const ListUseCallback = () => {
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
    const ulRef = React.useRef<HTMLUListElement | null>(null);
    const numbersRef = React.useRef<number[]>();
    //on each render assign to numbersRef.current numbers
    numbersRef.current = numbers;

    const handleScroll = React.useCallback(() => {
        console.log('scroll happend', numbersRef.current);
    }, []);

    const addNumber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
    };

    const start = () => {
        ulRef.current?.addEventListener('scroll', handleScroll);
    }

    const stop = () => {
        ulRef.current?.removeEventListener('scroll', handleScroll);
    }

    return (
        <div className="container" >
        <ul ref={ulRef} className="list-group" style={{ height: '200px', overflow: 'scroll' }}>
            {numbers.map((num, index) => <li className="list-group-item" key={index}>{num}</li>)}
        </ul>
        <button onClick={addNumber} className="btn btn-warning px-4 m-2"> ✅ add Number</button>
        <button onClick={start} className="btn btn-outline-success m-1"> start </button>
        <button onClick={stop} className="btn btn-outline-danger m-1"> stop </button>
    </div>
    )
}