import {
    BrainCircuit,
    Workflow,
    Cpu,
    BarChart3,
  } from "lucide-react";
  
  const solutions = [
    {
      icon: <BrainCircuit size={34} />,
      title: "Enterprise AI",
      description:
        "AI-powered solutions that help businesses make intelligent decisions, improve efficiency and unlock new opportunities.",
    },
    {
      icon: <Workflow size={34} />,
      title: "Intelligent Automation",
      description:
        "Automate repetitive workflows, streamline business processes and improve operational productivity.",
    },
    {
      icon: <Cpu size={34} />,
      title: "Custom Software",
      description:
        "Modern web, mobile and enterprise software tailored to your organization's unique requirements.",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Business Intelligence",
      description:
        "Transform business data into meaningful insights with interactive dashboards and smart analytics.",
    },
  ];
  
  export default function EnterpriseSolutions() {
    return (
      <section
        id="solutions"
        style={{
          padding: "110px 0",
        }}
      >
        <div className="container">
  
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 70px",
            }}
          >
            <div
              className="section-label"
              style={{
                justifyContent: "center",
              }}
            >
              WHAT WE DO
            </div>
  
            <h2 className="section-title">
              Enterprise
              <span className="gradient-text">
                {" "}AI Solutions
              </span>
            </h2>
  
            <p
              className="section-subtitle"
              style={{
                margin: "25px auto 0",
              }}
            >
              We help organizations embrace Artificial Intelligence,
              automation and modern software technologies to build
              smarter businesses and accelerate digital transformation.
            </p>
          </div>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "28px",
            }}
          >
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="glass-card glass-card--premium"
                style={{
                  padding: "34px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,#2563eb,#9333ea)",
                    marginBottom: "24px",
                  }}
                >
                  {solution.icon}
                </div>
  
                <h3
                  style={{
                    fontSize: "22px",
                    marginBottom: "14px",
                  }}
                >
                  {solution.title}
                </h3>
  
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }