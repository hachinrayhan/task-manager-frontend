/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";

const TaskCard = ({ task }) => {
  const [, drag] = useDrag({
    type: "task",
    item: { id: task.id },
  });

  return (
    <div ref={drag} className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <h4 className="text-lg font-bold">{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
