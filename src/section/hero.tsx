function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-sky-400">Martin</span>
      </h1>

      <p className="text-gray-400 mt-4">
        I build modern web applications using React
      </p>
    </section>
  );
}

export default Hero;