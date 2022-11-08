import React from "react";

interface IItemsList {
    getItems: () => (string[])
}

export const ItemsList: React.FC<IItemsList> = ({ getItems }) => {
    const [items, setItems] = React.useState<string[]>([]);
    React.useEffect(() => {

        const newItems = getItems();
        setItems(newItems);
        //console.log('render');
    }, [getItems])
    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
}