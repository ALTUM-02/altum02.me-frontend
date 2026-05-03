import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Background() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#020617",
        },
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.3,
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}

export default Background;