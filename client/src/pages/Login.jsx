import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      if (cred.email === "" || cred.email === null)
        return toast.warn("Fill The Email Field!");
      if (cred.password === "" || cred.password === null)
        return toast.warn("Fill The Password Field!");

      const newUser = { ...cred, email: cred.email.toLowerCase() };

      await axios
        .post(`${import.meta.env.VITE_API_URL}/User/login`, newUser)
        .then((res) => {
          if (res.data.type === "Success") toast.success(res.data.message);
          if (res.data.type === "Warning") return toast.warn(res.data.message);
          if (res.data.type === "Error") return toast.error(res.data.message);
          setTimeout(() => {
            setCred({
              email: "",
              password: "",
            });
            localStorage.setItem("Token", res.data.token)
            localStorage.setItem("User", JSON.stringify(res.data.user));
            navigate("/");
          }, 2000);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex bg-white justify-between items-center gap-10 p-10 border-2 rounded-2xl shadow-c">
      <div className="space-y-5 w-7/12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="w-full flex flex-col space-y-3"
        >
          <div className="space-y-2">
            <p>Email</p>
            <input
              value={cred.email}
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
              type="email"
              placeholder="Someone123@gmail.com"
              className="border p-1 rounded-md focus:border-2 w-full"
            />
          </div>
          <div className="space-y-2">
            <p>Password</p>
            <input
              value={cred.password}
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
              type="password"
              placeholder="Passxxxx"
              className="border p-1 rounded-md focus:border-2 w-full"
            />
          </div>
          <button className="b2 p-1 px-8">Login</button>
        </form>
        <h3 className="text-sm">
          Already Have An Account?{" "}
          <Link to="/signup" className="text-sky-700 dyna">
            Sign Up
          </Link>
        </h3>
        <h3 className="text-sm text-center">
          <Link to="/" className="text-sky-700 dyna">
            Go Home
          </Link>
        </h3>
      </div>
      <div className="">
        <h1 className="text-center dyna text-4xl">Login</h1>
        <img src="/login.jpg" alt="Home Illustration" className="w-76" />
      </div>
    </div>
  );
};

export default Login;
