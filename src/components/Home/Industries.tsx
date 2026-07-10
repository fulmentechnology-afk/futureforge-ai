import {
    Building2,
    Car,
    ShoppingCart,
    Factory,
    GraduationCap,
    HeartPulse,
  } from "lucide-react";
  
  const industries = [
    {
      icon: <Building2 size={34} />,
      title: "Construction",
      description:
        "AI-powered project management, digital workflows, document automation and intelligent business operations.",
    },
    {
      icon: <Car size={34} />,
      title: "Automotive",
      description:
        "Smart workshop management, vehicle lifecycle tracking and AI-driven customer engagement.",
    },
    {
      icon: <ShoppingCart size={34} />,
      title: "Retail & E-Commerce",
      description:
        "Digital commerce platforms, inventory management and customer experience solutions.",
    },
    {
      icon: <Factory size={34} />,
      title: "Manufacturing",
      description:
        "Production automation, operational intelligence and data-driven manufacturing processes.",
    },
    {
      icon: <HeartPulse size={34} />,
      title: "Healthcare",
      description:
        "Secure digital healthcare solutions, intelligent workflows and patient engagement platforms.",
    },
    {
      icon: <GraduationCap size={34} />,
      title: "Education",
      description:
        "Learning management systems, AI-assisted education and digital learning experiences.",
    },
  ];
  
  export default function Industries() {
    return (
      <section
        id="industries"
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
              INDUSTRIES WE EMPOWER
            </div>
  
            <h2 className="section-title">
              Technology That Powers
              <span className="gradient-text">
                {" "}Every Industry
              </span>
            </h2>
  
            <p
              className="section-subtitle"
              style={{
                margin: "25px auto 0",
              }}
            >
              We partner with organizations across diverse industries,
              delivering AI-powered software, intelligent automation and
              digital transformation solutions that create measurable
              business impact.
            </p>
          </div>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "28px",
            }}
          >
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="glass-card glass-card--premium"
                style={{
                  padding: "32px",
                  transition: "0.35s",
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
                    marginBottom: "22px",
                  }}
                >
                  {industry.icon}
                </div>
  
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "14px",
                  }}
                >
                  {industry.title}
                </h3>
  
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }