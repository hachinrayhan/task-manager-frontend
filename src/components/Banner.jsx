import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-xl mb-8">
          Enhance your productivity by managing tasks efficiently.
        </p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
          <Link to={"/dashboard"}>Let&apos;s Explore</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
