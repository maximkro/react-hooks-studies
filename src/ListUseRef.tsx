import React from "react";

export const ListUseRef = () => {
    const [numbs, setNumbs] = React.useState([1, 2, 3]);
    //use ref does not change {current: } object on each rerender
    const ulRef = React.useRef<HTMLUListElement | null>(null);

    const addNumber = () => {
        const randomNumber = Math.round(Math.random() * 10);
        setNumbs(prev => [...prev, randomNumber]);
    }

    React.useEffect(() => {
        ulRef.current!.addEventListener('scroll', () => { console.log('scroll happened!') });
    }, [])

    return (
        <div className="container" >
            <ul ref={ulRef} className="list-group" style={{ height: '200px', overflow: 'scroll' }}>
                {numbs.map((num, index) => <li className="list-group-item" key={index}>{num}</li>)}
            </ul>
            <button onClick={addNumber} className="btn btn-warning"> ✅ add Number</button>
        </div>
    );
}