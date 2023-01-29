import React, { useState } from "react";

interface ITaskListProps {
    tasks: ITask[]
    onChangeTask: (task: ITask) => void;
    onDeleteTask: (taskId: string) => void;
}

export interface ITask {
    id: string;
    text: string;
    done: boolean;
}

interface ITaskCardProps {
    task: ITask;
    onChange: (task: ITask) => void;
    onDelete: (id: string) => void;
}

export const TaskList: React.FC<ITaskListProps> = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskCard
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}


const TaskCard: React.FC<ITaskCardProps> = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => { onChange({ ...task, text: e.target.value }) }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => { onChange({ ...task, done: e.target.checked }); }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>delete</button>
        </label>
    )
}