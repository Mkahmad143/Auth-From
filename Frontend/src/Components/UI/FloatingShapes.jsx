import React from "react";
import { motion } from "motion/react";

const FloatingShapes = ({ size, top, left, delay, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-30 blur-xl `}
      style={{ top, left }}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
      area-hidden="true"
    />
  );
};

export default FloatingShapes;
