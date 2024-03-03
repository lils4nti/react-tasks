/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    const createTask = (task) => {
        setTasks([
            ...tasks,
            {
                title: task.title,
                id: tasks.length,
                description: task.description,
            },
        ]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
