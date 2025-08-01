import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4">Intern Login</h1>
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Dummy Login 🚀
        </button>
      </div>
    </div>
  );
};

export default Login;
