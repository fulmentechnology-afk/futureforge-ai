import {
    BrainCircuit,
    Cpu,
    Workflow,
    ShieldCheck,
  } from "lucide-react";
  
  const features = [
    {
      icon: <BrainCircuit size={26} />,
      title: "Enterprise AI",
      description:
        "AI-powered solutions that help businesses make faster and smarter decisions.",
    },
    {
      icon: <Workflow size={26} />,
      title: "Automation",
      description:
        "Intelligent workflow automation that reduces manual effort and increases productivity.",
    },
    {
      icon: <Cpu size={26} />,
      title: "Custom Software",
      description:
        "Scalable web, mobile and enterprise software built specifically for your business.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Digital Transformation",
      description:
        "Helping organizations modernize operations through innovative technology.",
    },
  ];
  
  export default function About() {
    return (
      <section
        id="about"
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
              ABOUT FULMEN TECHNOLOGY
            </div>
  
            <h2 className="section-title">
              Engineering Intelligent
              <br />
              <span className="gradient-text">
                Digital Experiences
              </span>
            </h2>
  
            <p
              className="section-subtitle"
              style={{
                margin: "25px auto 0",
              }}
            >
              Fulmen Technology Pvt. Ltd. is an innovation-driven technology
              company focused on Enterprise AI, Intelligent Automation,
              Custom Software Development and Digital Transformation.
              We build scalable digital solutions that empower businesses
              to innovate, automate and grow.
            </p>
          </div>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "28px",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card glass-card--premium"
                style={{
                  padding: "32px",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,#2563eb,#9333ea)",
                    marginBottom: "24px",
                  }}
                >
                  {feature.icon}
                </div>
  
                <h3
                  style={{
                    fontSize: "22px",
                    marginBottom: "14px",
                  }}
                >
                  {feature.title}
                </h3>
  
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }