import React from "react";

const Input = ({ Icon, ...props }) => {
  return (
    <main className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="text-green-500 size-5" />
      </div>
      <input
        {...props}
        className="w-full py-[0.8rem] pl-10 pr-3 text-lg text-white placeholder-gray-400 transition duration-200 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500"
      />
    </main>
  );
};

export default Input;
