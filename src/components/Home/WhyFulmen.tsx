import {
    Award,
    Lightbulb,
    ShieldCheck,
    Users,
  } from "lucide-react";
  
  const reasons = [
    {
      icon: <Lightbulb size={30} />,
      title: "Innovation First",
      description:
        "We combine Artificial Intelligence, automation and modern technologies to build future-ready digital solutions.",
    },
    {
      icon: <Users size={30} />,
      title: "Client-Centric Approach",
      description:
        "Every solution is designed around your business goals, ensuring measurable outcomes and long-term value.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Reliable & Secure",
      description:
        "We develop scalable, secure and high-performance software using industry best practices.",
    },
    {
      icon: <Award size={30} />,
      title: "Quality Engineering",
      description:
        "From concept to deployment, our focus is on delivering reliable products with exceptional user experiences.",
    },
  ];
  
  export default function WhyFulmen() {
    return (
      <section
        id="why-fulmen"
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
              WHY CHOOSE FULMEN
            </div>
  
            <h2 className="section-title">
              Your Trusted Partner in
              <span className="gradient-text">
                {" "}Digital Innovation
              </span>
            </h2>
  
            <p
              className="section-subtitle"
              style={{
                margin: "25px auto 0",
              }}
            >
              We help businesses transform ideas into intelligent digital
              solutions by combining innovation, engineering excellence
              and a customer-first mindset.
            </p>
          </div>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "28px",
            }}
          >
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="glass-card glass-card--premium"
                style={{
                  padding: "32px",
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
                  {reason.icon}
                </div>
  
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "14px",
                  }}
                >
                  {reason.title}
                </h3>
  
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }