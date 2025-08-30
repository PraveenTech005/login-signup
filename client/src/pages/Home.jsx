import { Link } from "react-router-dom";
import DatePretty from "../components/DatePretty";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("User")));

  const deleteUser = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/User/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        data: user,
      });
      toast.success("User Deleted Successfully");
      setTimeout(() => {
        setUser(null);
        localStorage.removeItem("User");
      }, 2000);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logOut = () => {
    toast.success("Logged Out");
    setTimeout(() => {
      setUser(null);
      localStorage.removeItem("User");
      localStorage.removeItem("Token");
    }, 2000);
  };
  return (
    <div className="flex bg-white justify-between items-center space-x-10 p-10 border-2 rounded-2xl shadow-c">
      <div className="">
        <h1 className="text-center dyna text-7xl">Home</h1>
        <img src="/home.jpg" alt="Home Illustration" className="w-96" />
      </div>
      {user ? (
        <div>
          <h1 className="text-center dyna text-2xl text-sky-600">
            Logged In As
          </h1>
          <div className="flex flex-col justify-between space-y-10 p-10">
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <h3 className="w-full flex space-x-5 justify-between">
              <span>Created At:</span>{" "}
              <DatePretty datepretty={user.createdAt} />
            </h3>
            <h3 className="w-full flex space-x-5 justify-between">
              <span>Last Updated:</span>{" "}
              <DatePretty datepretty={user.updatedAt} />
            </h3>
          </div>
          <div className="flex justify-evenly items-center">
            <button className="b1 p-1 px-4" onClick={deleteUser}>
              Delete
            </button>
            <button className="b2 p-1 px-4" onClick={logOut}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="space-y-5 ">
            <h3>Already Have An Account?</h3>
            <button className="b1">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <div className="space-y-5 ">
            <h3>Don't Have An Account!</h3>
            <button className="b2">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
