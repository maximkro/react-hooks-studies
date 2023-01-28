import React, { useId, useState } from "react";
import  { ITask } from "./TaskList";


export const TasksContainer: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    
    function handleAddTask(text: string) {
        
        setTasks([
          ...tasks,
          {
            id: id,
            text: text,
            done: false,
          },
        ]);
      }

}