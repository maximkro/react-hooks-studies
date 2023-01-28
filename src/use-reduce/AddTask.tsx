import React, { useState } from "react";

interface IAddTaskProps {
    onAddTask: (text: string) => void;
}

export const AddTask: React.FC<IAddTaskProps> = ({ onAddTask }) => {
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="Add Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}
            >
                Add
            </button>
        </>
    );
}