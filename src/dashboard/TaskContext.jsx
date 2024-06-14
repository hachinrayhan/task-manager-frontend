import { createContext, useState } from "react";

export const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description 1", status: "to-do" },
    { id: 2, title: "Task 2", description: "Description 2", status: "ongoing" },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      status: "completed",
    },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
