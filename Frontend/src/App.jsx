import React from "react";
import FloatingShapes from "./Components/UI/FloatingShapes";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import ForgotPassword from "./Components/Pages/ForgotPassword";
import VerifyEmail from "./Components/Pages/VerifyEmail";
import Home from "./Components/Pages/Home";

const App = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden font-mons bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 ">
      <FloatingShapes
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShapes
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShapes
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="0%"
        delay={2}
      />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
};

export default App;
