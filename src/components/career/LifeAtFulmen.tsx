import {
    Brain,
    Rocket,
    Globe2,
    GraduationCap,
    HeartHandshake,
    Sparkles,
  } from "lucide-react";
  
  const values = [
    {
      icon: Brain,
      title: "AI First Mindset",
      description:
        "Work on cutting-edge AI, automation and enterprise solutions that solve real business problems.",
    },
    {
      icon: Rocket,
      title: "Innovation Every Day",
      description:
        "Experiment, build, fail fast and create products that shape the future.",
    },
    {
      icon: Globe2,
      title: "Flexible Work",
      description:
        "Remote-friendly culture with the freedom to work where you perform best.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Learn emerging technologies, AI frameworks and modern development practices.",
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Culture",
      description:
        "Engineers, designers and business teams work together to build impactful products.",
    },
    {
      icon: Sparkles,
      title: "Career Growth",
      description:
        "Take ownership, grow your skills and build a long-term career with Fulmen Technology.",
    },
  ];
  
  export default function LifeAtFulmen() {
    return (
      <section className="py-24">
  
        <div className="container">
  
          <div className="text-center mb-20">
  
            <div className="section-label justify-center">
              LIFE AT FULMEN
            </div>
  
            <h2 className="section-title">
              Build The Future With
              <span className="gradient-text">
                {" "}People Who Innovate
              </span>
            </h2>
  
            <p className="section-subtitle mx-auto mt-6">
              At Fulmen Technology, we don't just build software.
              We build intelligent products that transform businesses.
            </p>
  
          </div>
  
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
  
            {values.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="glass-card glass-card--premium rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
  
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20">
  
                    <Icon
                      className="text-cyan-300"
                      size={30}
                    />
  
                  </div>
  
                  <h3 className="text-2xl font-bold">
  
                    {item.title}
  
                  </h3>
  
                  <p className="mt-5 leading-7 text-gray-400">
  
                    {item.description}
  
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  }