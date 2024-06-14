import TaskList from "./TaskList";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Task Management Dashboard</h1>
      <div className="flex justify-between space-x-4">
        <TaskList status="to-do" title="To Do" />
        <TaskList status="ongoing" title="Ongoing" />
        <TaskList status="completed" title="Completed" />
      </div>
    </div>
  );
};

export default Dashboard;
