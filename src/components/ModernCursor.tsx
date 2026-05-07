import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ModernCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover detection
    const hoverElements = document.querySelectorAll(
      "a, button, .project-card"
    );

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* 🔥 Outer Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-sky-400 mix-blend-difference"
        animate={{
          x: position.x - (hovering ? 40 : 20),
          y: position.y - (hovering ? 40 : 20),
          width: hovering ? 80 : 40,
          height: hovering ? 80 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        {/* Hover Text */}
        {hovering && (
          <div className="w-full h-full flex items-center justify-center text-[10px] text-white">
            VIEW
          </div>
        )}
      </motion.div>

      {/* 🔥 Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 bg-sky-400 rounded-full"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* 🔥 Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-40 h-40 rounded-full bg-sky-500/20 blur-3xl"
        animate={{
          x: position.x - 80,
          y: position.y - 80,
          scale: hovering ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      />
    </>
  );
}

export default ModernCursor;