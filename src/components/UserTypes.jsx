const UserTypes = () => {
  const userTypes = [
    {
      title: "Developers",
      description:
        "Organize your coding tasks, track bugs, and manage your development projects efficiently.",
      icon: "💻",
    },
    {
      title: "Corporate Professionals",
      description: "Manage your work tasks, meetings, and deadlines with ease.",
      icon: "📈",
    },
    {
      title: "Bankers",
      description:
        "Keep track of financial tasks, client meetings, and reports.",
      icon: "💼",
    },
    {
      title: "Students",
      description:
        "Organize your study schedule, assignments, and project deadlines.",
      icon: "📚",
    },
    {
      title: "Freelancers",
      description:
        "Manage your client projects, invoices, and deadlines efficiently.",
      icon: "📝",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg">
              <div className="text-6xl mb-4">{user.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{user.title}</h3>
              <p>{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTypes;
