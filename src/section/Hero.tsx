import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="text-center max-w-3xl mx-auto">

        {/* 🔹 Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          variants={