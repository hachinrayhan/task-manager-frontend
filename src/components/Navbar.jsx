import { Link, useNavigate } from "react-router-dom";
import useAuth from "../authProvider/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    toast.success("You have logged out. See you soon!");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Task Manager
        </Link>
        <div>
          {user ? (
            <>
              <Link to="/dashboard" className="text-white mr-4">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
