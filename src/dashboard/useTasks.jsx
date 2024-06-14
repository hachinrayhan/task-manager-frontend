import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const useTasks = () => {
  const useTasks = useContext(TaskContext);
  return useTasks;
};

export default useTasks;
