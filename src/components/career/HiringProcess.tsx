import {
    FileText,
    SearchCheck,
    Code2,
    Users,
    BadgeCheck,
  } from "lucide-react";
  
  const steps = [
    {
      icon: FileText,
      title: "Apply",
      description:
        "Submit your application through our careers portal.",
    },
    {
      icon: SearchCheck,
      title: "Resume Review",
      description:
        "Our recruitment team carefully evaluates your profile.",
    },
    {
      icon: Code2,
      title: "Technical Interview",
      description:
        "Meet our engineers and demonstrate your technical skills.",
    },
    {
      icon: Users,
      title: "HR Discussion",
      description:
        "Discuss your goals, culture fit and career aspirations.",
    },
    {
      icon: BadgeCheck,
      title: "Offer & Onboarding",
      description:
        "Receive your offer and begin your journey with Fulmen Technology.",
    },
  ];
  
  export default function HiringProcess() {
    return (
      <section className="py-24">
  
        <div className="container">
  
          <div className="text-center mb-20">
  
            <div className="section-label justify-center">
              HIRING PROCESS
            </div>
  
            <h2 className="section-title">
              Our
              <span className="gradient-text">
                {" "}Recruitment Journey
              </span>
            </h2>
  
            <p className="section-subtitle mx-auto mt-6">
              A transparent hiring process designed to help
              you showcase your skills and grow with us.
            </p>
  
          </div>
  
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
  
            {steps.map((step, index) => {
              const Icon = step.icon;
  
              return (
                <div
                  key={step.title}
                  className="glass-card glass-card--premium rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
  
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20">
  
                    <Icon
                      size={30}
                      className="text-cyan-300"
                    />
  
                  </div>
  
                  <div className="mb-3 text-sm font-bold text-cyan-400">
  
                    STEP {index + 1}
  
                  </div>
  
                  <h3 className="text-xl font-bold">
  
                    {step.title}
  
                  </h3>
  
                  <p className="mt-4 text-gray-400 leading-7">
  
                    {step.description}
  
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  }