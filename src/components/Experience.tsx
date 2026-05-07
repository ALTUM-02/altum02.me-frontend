import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 bg-[#020817] text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        Experience & Education
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative">

        {/* Education */}
        <div className="flex items-start gap-6">

          {/* Icon */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full border border-orange-500 text-orange-500">
              <GraduationCap />
            </div>

            <div className="w-[2px] h-full bg-orange-500 mt-2"></div>
          </div>

          {/* Card */}
          <div className="flex-1 bg-slate-900/70 border border-slate-700 rounded-3xl p-8 hover:border-orange-500 transition">

            <span className="px-4 py-1 text-sm rounded-full bg-orange-500/20 text-orange-400">
              Education
            </span>

            <h3 className="text-3xl font-bold mt-6">
              Software Engineering Student
            </h3>

            <h4 className="text-orange-400 mt-2 text-lg">
              University of Dodoma
            </h4>

            <div className="flex gap-6 mt-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                2021 - Present
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Dodoma, Tanzania
              </div>
            </div>

            <p className="text-gray-300 mt-6 leading-relaxed">
              Focused on software development, AI/ML, and cloud computing.
              Built several full-stack applications and AI projects.
            </p>

          </div>
        </div>

        {/* Work */}
        <div className="flex items-start gap-6">

          {/* Icon */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full border border-blue-500 text-blue-500">
              <Briefcase />
            </div>
          </div>

          {/* Card */}
          <div className="flex-1 bg-slate-900/70 border border-slate-700 rounded-3xl p-8 hover:border-sky-500 transition">

            <span className="px-4 py-1 text-sm rounded-full bg-sky-500/20 text-sky-400">
              Work
            </span>

            <h3 className="text-3xl font-bold mt-6">
              Full-Stack Developer Intern
            </h3>

            <h4 className="text-sky-400 mt-2 text-lg">
              Tech Startup
            </h4>

            <div className="flex gap-6 mt-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                2023 - 2024
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Dodoma, Tanzania
              </div>
            </div>

            <p className="text-gray-300 mt-6 leading-relaxed">
              Developed web applications using React and Django,
              implemented CI/CD pipelines, and deployed on AWS EC2.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}