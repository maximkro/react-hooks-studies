import { ITask } from './TaskList';

interface ITaskAction {
    type: string;
    text?: string;
    task?: ITask;
    taskId?: string;
}



export const TaskReducer = (tasks: ITask[], action: ITaskAction): ITask[] => {

    switch (action.type) {
        case 'added': {
            if (!action.text) {
                throw Error('text missing');
            }
            const tasksUpdated = [...tasks, { id: Date.now().toString(), text: action.text, done: false }];
            sessionStorage.setItem('tasks', JSON.stringify(tasksUpdated));
            return tasksUpdated;
        }
        case 'changed': {
            if (!action.task) {
                throw Error('task missing');
            } else {
                let tasksUpdated = tasks.map(task => {
                    if (task.id === action.task?.id) {
                        return action.task
                    } else {
                        return task;
                    }
                });
                sessionStorage.setItem('tasks', JSON.stringify(tasksUpdated));
                return tasksUpdated;
            }
        }
        case 'deleted': {
            if (!action.taskId) {
                throw Error('task id missing');
            } else {
                let tasksUpdated =  tasks.filter(task => task.id !== action.taskId);
                sessionStorage.setItem('tasks', JSON.stringify(tasksUpdated));
                return tasksUpdated
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}