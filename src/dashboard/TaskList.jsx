import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import useTasks from "./useTasks";

// eslint-disable-next-line react/prop-types
const TaskList = ({ status, title }) => {
  const { tasks, updateTaskStatus } = useTasks();

  const [, drop] = useDrop({
    accept: "task",
    drop: (item) => updateTaskStatus(item.id, status),
  });

  return (
    <div ref={drop} className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
};

export default TaskList;
