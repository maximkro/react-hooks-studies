import React from "react";
import './buttons.css';


interface IButtonsProps {
    onPlus: () => void
    onMinus: () => void
};

const Buttons: React.FC<IButtonsProps> = React.memo( ({ onPlus, onMinus }) => {
    console.log('Buttons render');

    return (
        <>
            <button className="button" onClick={onPlus}> + </button>
            <button className="button" onClick={onMinus}> - </button>
        </>


    );
});

export default Buttons;