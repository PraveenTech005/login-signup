import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const SignUp = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);

  const handleRegister = async () => {
    try {
      if (cred.name === "" || cred.name === null)
        return toast.warn("Fill The Name Field!");
      if (cred.email === "" || cred.email === null)
        return toast.warn("Fill The Email Field!");
      if (cred.password === "" || cred.password === null)
        return toast.warn("Fill The Password Field!");

      const newUser = { ...cred, email: cred.email.toLowerCase() };

      await axios
        .post(`${import.meta.env.VITE_API_URL}/User/register`, newUser)
        .then((res) => {
          if (res.data.type === "Success") toast.success(res.data.message);
          if (res.data.type === "Error") return toast.error(res.data.message);
          setTimeout(() => {
            setCred({
              name: "",
              email: "",
              password: "",
            });
            navigate("/login");
          }, 2000);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex bg-white justify-between items-center gap-10 p-10 border-2 rounded-2xl shadow-c">
      <div className="">
        <h1 className="text-center dyna text-4xl">Sign Up</h1>
        <img src="/signup.jpg" alt="Home Illustration" className="w-76" />
      </div>
      <div className="space-y-5 w-7/12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="w-full flex flex-col space-y-3"
        >
          <div className="space-y-2">
            <p>Name</p>
            <input
              required
              value={cred.name}
              onChange={(e) => setCred({ ...cred, name: e.target.value })}
              type="text"
              placeholder="John Doe"
              className="border p-1 rounded-md focus:border-2 w-full"
            />
          </div>
          <div className="space-y-2">
            <p>Email</p>
            <input
              required
              value={cred.email}
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
              type="email"
              placeholder="Someone123@gmail.com"
              className="border p-1 rounded-md focus:border-2 w-full"
            />
          </div>
          <div className="space-y-2">
            <p>Password</p>
            <div className="flex justify-between items-center space-x-2">
              <input
                required
                value={cred.password}
                onChange={(e) => setCred({ ...cred, password: e.target.value })}
                type={showPass ? "text" : "password"}
                placeholder="Passxxxx"
                className="border p-1 rounded-md focus:border-2 w-full"
              />
              <button
                type="button"
                className="p-1"
                onClick={() => setShowPass((prev) => !prev)}
              >
                {showPass ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
              </button>
            </div>
          </div>
          <button type="submit" className="b2 p-1 px-8">
            Sign Up
          </button>
        </form>
        <h3 className="text-sm">
          Already Have An Account?{" "}
          <Link to="/login" className="text-sky-700 dyna">
            Login
          </Link>
        </h3>
        <h3 className="text-sm text-center">
          <Link to="/" className="text-sky-700 dyna">
            Go Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
