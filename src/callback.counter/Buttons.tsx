import React from "react";

interface IButtonsProps {
    onPlus: () => void,
    onMinus: () => void
}
export const Buttons = React.memo(({ onPlus, onMinus }: IButtonsProps) => {
    console.log(`Buttons render`);

    return (
        <div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    )
})