import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "./GoogleLogin";
import useAuth from "../../authProvider/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            toast.success("Login Successful!");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message.replace("Firebase: ", ""); //Firebase: Error (auth/invalid-credential).
        setError(errorMessage);
      });
  };

  //For removing existing error message
  const removeError = () => {
    setError("");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="py-6">
            Sign in to manage your profile, browse our premium products, and
            place orders with ease. Experience the best of Poppy&apos;s Premium.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form
            onChange={removeError}
            onSubmit={handleSubmit(handleLogin)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-500">
                  Password must be at least 6 characters or more
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <p>
              New here?{" "}
              <Link
                className="text-blue-600"
                to="/signup"
                state={{ from: location?.state?.from }}
              >
                SignUp
              </Link>
            </p>
          </form>
          <div className="card-body">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
