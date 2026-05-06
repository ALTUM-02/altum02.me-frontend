function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl text-sky-400 mb-10 text-center">
          Skills
        </h2>

        <div className="space-y-6">

          <div>
            <p>React</p>
            <div className="w-full bg-slate-700 h-2 rounded">
              <div className="bg-sky-400 h-2 rounded w-[80%]" />
            </div>
          </div>

          <div>
            <p>Django</p>
            <div className="w-full bg-slate-700 h-2 rounded">
              <div className="bg-orange-400 h-2 rounded w-[70%]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}