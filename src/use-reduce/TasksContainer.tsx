import React from "react";
import { ITask, TaskList } from "./TaskList";
import { TaskReducer } from "./task.reducer";
import { AddTask } from "./AddTask";


export const TasksContainer: React.FC = () => {

  let cachedTasks: ITask[] = [];
  if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify([]));
  } else {
    cachedTasks = JSON.parse(localStorage.getItem('tasks')!);
  }

  const [tasks, dispatch] = React.useReducer(TaskReducer, cachedTasks)

  function handleAddTask(text: string) {
    try {
      dispatch({
        type: 'added',
        text: text
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeTask(task: ITask) {
    try {
      dispatch({
        type: 'changed',
        task: task
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleDeleteTask(taskId: string) {
    try {
      dispatch({
        type: 'deleted',
        taskId: taskId
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}