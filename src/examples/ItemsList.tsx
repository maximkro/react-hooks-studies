import React from "react";

interface IItemsList {
    getItems: () => (string[])
}

export const ItemsList: React.FC<IItemsList> = ({ getItems }) => {
    const [items, setItems] = React.useState<string[]>([]);
    React.useEffect(() => {

        const newItems = getItems();
        setItems(newItems);
        
    }, [getItems])
    console.log('render');
    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    );
};