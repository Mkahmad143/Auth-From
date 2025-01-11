import { Loader, Lock, Mail } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../UI/Input";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handlelogin = (e) => {
    e.preventDefault();
  };
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full max-w-[30rem] sm:max-w-[33rem] overflow-hidden bg-gray-800 bg-opacity-50 shadow-xl backdrop-filter backdrop-blur-xl rounded-2xl"
    >
      <div className="p-8">
        <h2 className="mb-6 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
          Welcome Back
        </h2>
        <form onSubmit={handlelogin}>
          <Input
            Icon={Mail}
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <Input
            Icon={Lock}
            type="email"
            placeholder="Enter your Email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-6 ml-1">
            <Link
              to={"/forgot-password"}
              className="text-green-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <motion.button
            className="w-full px-4 py-3 mt-2 text-xl font-semibold text-white transition duration-200 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            Login
          </motion.button>
        </form>
      </div>
      <div className="flex justify-center px-8 py-4 bg-gray-900 bg-opacity-50">
        <p className="text-base text-gray-400 ">
          Don't Have an Account?
          <Link to={"/login"} className="ml-1 text-green-500 hover:underline">
            Create Now
          </Link>
        </p>
      </div>
    </motion.main>
  );
};

export default Login;
