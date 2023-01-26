import React from "react";

export const Ref = () => {
    const [count, setCount] = React.useState(0);
    const [valueTwo, setValueTwo] = React.useState('hello')
    const [value, setValue] = React.useState('initial')
    const renderCount = React.useRef<number>(1);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const prevRef = React.useRef<string>('');

    React.useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current);
        console.log(prevRef.current);
    });

    React.useEffect(() => {
        prevRef.current = value
    }, [value])


    return (
        <div>
            <h1>{renderCount.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}></input>
            <input type="text" value={prevRef.current}></input>
        </div>
    );
}