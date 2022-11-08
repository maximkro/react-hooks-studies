import React from "react";

export function complexAlg(num: number): number {
    console.log('complex compute');
    let i = 0;
    while (i < 1000000000) {
        i++;
    }
    return (num * 2);
}

export const Memo = () => {
    const [number, setNumber] = React.useState(42);
    const [colored, setColored] = React.useState(false);

    // used for caching stuffs .. execute iff number was altered during the rerender
    const computed = React.useMemo(() => {
        return complexAlg(number);
    }, [number]);

    const styles = React.useMemo(() => ({ color: colored ? "darkred" : "black" }), [colored])

    React.useEffect(() => {
        console.log('style changed');
    }, [styles]);
    return (
        <>
            <h1 style={styles}>number: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-success"> + </button>
            <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-danger"> - </button>
            <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">setColor</button>
        </>
    );
}