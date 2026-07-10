import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    value: "15+",
    title: "Open Positions",
  },
  {
    value: "AI",
    title: "Innovation Driven",
  },
  {
    value: "Growth",
    title: "Learning Culture",
  },
];

export default function CareersPreview() {
  return (
    <section
      id="careers"
      style={{
        padding: "120px 0",
      }}
    >
      <div className="container">
        <div
          className="glass-card glass-card--premium"
          style={{
            padding: "70px",
            borderRadius: "32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              margin: "0 auto 30px",
              borderRadius: "22px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(135deg,#2563eb,#9333ea)",
            }}
          >
            <BriefcaseBusiness
              size={40}
              color="white"
            />
          </div>

          <div
            className="section-label"
            style={{
              justifyContent: "center",
            }}
          >
            JOIN OUR TEAM
          </div>

          <h2 className="section-title">
            Build Your Career
            <span className="gradient-text">
              {" "}With Fulmen Technology
            </span>
          </h2>

          <p
            className="section-subtitle"
            style={{
              maxWidth: "760px",
              margin: "25px auto 55px",
            }}
          >
            Join a passionate team building Enterprise AI,
            Intelligent Automation and next-generation digital
            products that help businesses innovate and grow.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "30px",
              marginBottom: "55px",
            }}
          >
            {stats.map((item) => (
              <div key={item.title}>
                <h2
                  className="gradient-text"
                  style={{
                    fontSize: "48px",
                  }}
                >
                  {item.value}
                </h2>

                <p
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/careers"
            className="btn-glass btn-glass-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Build Your Career

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}