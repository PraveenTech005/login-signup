import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-screen text-[#333] bg-[#ddd] flex justify-center items-center">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
