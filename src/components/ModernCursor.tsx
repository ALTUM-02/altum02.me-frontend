import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ModernCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // 🔥 Dynamic color state
  const [color, setColor] = useState("rgba(56,189,248,0.4)");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // 🔥 Hover detection
    const hoverElements = document.querySelectorAll(
      "a, button, .project-card"
    );

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // 🔥 Scroll section detection
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2) {

          const id = section.getAttribute("id");

          switch (id) {
            case "home":
              setColor("rgba(56,189,248,0.4)"); // blue
              break;

            case "about":
              setColor("rgba(168,85,247,0.4)"); // purple
              break;

            case "projects":
              setColor("rgba(249,115,22,0.4)"); // orange
              break;

            case "contact":
              setColor("rgba(34,197,94,0.4)"); // green
              break;

            default:
              setColor("rgba(56,189,248,0.4)");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* 🔥 Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border mix-blend-difference"
        style={{
          borderColor: color,
        }}
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
        {hovering && (
          <div className="w-full h-full flex items-center justify-center text-[10px] text-white">
            VIEW
          </div>
        )}
      </motion.div>

      {/* 🔥 Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full"
        style={{
          backgroundColor: color,
        }}
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
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-44 h-44 rounded-full blur-3xl"
        style={{
          backgroundColor: color,
        }}
        animate={{
          x: position.x - 88,
          y: position.y - 88,
          scale: hovering ? 1.5 : 1,
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