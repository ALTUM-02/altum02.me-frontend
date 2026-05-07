import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Brain,
  Boxes,
} from "lucide-react";

const skills = [
  {
    name: "React",
    role: "Frontend",
    percentage: "95%",
    width: "95%",
    color: "bg-cyan-400",
    icon: <Code2 size={22} />,
  },
  {
    name: "TypeScript",
    role: "Frontend",
    percentage: "90%",
    width: "90%",
    color: "bg-blue-500",
    icon: <Code2 size={22} />,
  },
  {
    name: "Django",
    role: "Backend",
    percentage: "92%",
    width: "92%",
    color: "bg-green-500",
    icon: <Database size={22} />,
  },
  {
    name: "Python",
    role: "Backend",
    percentage: "95%",
    width: "95%",
    color: "bg-sky-500",
    icon: <Code2 size={22} />,
  },
  {
    name: "Kotlin",
    role: "Mobile",
    percentage: "88%",
    width: "88%",
    color: "bg-purple-500",
    icon: <Smartphone size={22} />,
  },
  {
    name: "AWS",
    role: "Cloud",
];

export default function Skills() {
  return (
    <section className="py-20 bg-[#020817] text-white">

      <h2 className="text-4xl font-bold text-center mb-14">
        Technical Proficiency
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900/70 border border-slate-700 rounded-3xl p-6 hover:border-sky-500 transition"
          >

            <div className="flex justify-between items-center mb-6">

              <div className="flex items-center gap-4">

                <div className="p-3 rounded-xl bg-slate-800 text-sky-400">
                  {skill.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {skill.role}
                  </p>
                </div>

              </div>

              <span className="text-sky-400 font-semibold">
                {skill.percentage}
              </span>

            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">

              <div
                className={`${skill.color} h-full rounded-full`}
                style={{ width: skill.width }}
              ></div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}