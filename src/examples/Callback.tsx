import React from 'react';
import { ItemsList } from './ItemsList'



const Callback = () => {

    const [colored, setColored] = React.useState(false);
    const [count, setCount] = React.useState(1);
    //console.log('render App');
    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    // use callBack is needed when we want to cache a callback func
    // means after rerendering if dep is the same func not gonna be recreated
    // no loss of reference 
    const generateItemsFromApi = React.useCallback(() => {
        // (_,i) first placeholder is empty normally is a val of index and second is the index
        return new Array(count).fill('').map((_, i) => `element ${i + 1}`);
    }, [count]);

    return (
        <>
            <h1 style={styles}>number: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)} className="btn btn-success"> + </button>
            <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">change</button>
            <ItemsList getItems={generateItemsFromApi} />
        </>
    );
}