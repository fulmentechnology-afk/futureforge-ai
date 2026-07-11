import {
  BrainCircuit,
  Workflow,
  Cpu,
  BarChart3,
  Building2,
  Bot,
} from "lucide-react";

const solutions = [
  {
    icon: <BrainCircuit size={34} />,
    title: "Enterprise AI",
    description:
      "Deploy intelligent AI solutions that improve decision-making, increase productivity and create measurable business value across your organization.",
  },
  {
    icon: <Workflow size={34} />,
    title: "Business Automation",
    description:
      "Automate repetitive workflows across CRM, ERP, HR, Finance, Email, WhatsApp and enterprise operations to improve efficiency.",
  },
  {
    icon: <Building2 size={34} />,
    title: "Industry Solutions",
    description:
      "Purpose-built AI solutions for Real Estate, Construction, Healthcare, Manufacturing and Retail businesses.",
  },
  {
    icon: <Bot size={34} />,
    title: "AI Agents",
    description:
      "Intelligent AI assistants that support customers, qualify leads, assist employees and operate 24×7 across your business.",
  },
  {
    icon: <Cpu size={34} />,
    title: "Custom Software",
    description:
      "Scalable enterprise web applications, mobile platforms and cloud solutions designed specifically for your business processes.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Business Intelligence",
    description:
      "Transform business data into executive dashboards, predictive analytics and actionable insights for better decision making.",
  },
];

export default function EnterpriseSolutions() {
  return (
    <section
      id="solutions"
      style={{
        padding: "120px 0",
      }}
    >
      <div className="container">

        <div
          style={{
            textAlign: "center",
            maxWidth: "820px",
            margin: "0 auto 80px",
          }}
        >
          <div
            className="section-label"
            style={{
              justifyContent: "center",
            }}
          >
            ENTERPRISE AI SOLUTIONS
          </div>

          <h2 className="section-title">
            AI Solutions Built for{" "}
            <span className="gradient-text">
              Modern Businesses
            </span>
          </h2>

          <p
            className="section-subtitle"
            style={{
              margin: "25px auto 0",
              maxWidth: "760px",
            }}
          >
            Fulmen Technology empowers organizations with Artificial
            Intelligence, enterprise software, intelligent automation,
            AI agents and industry-focused digital transformation
            solutions that improve operational efficiency and
            accelerate sustainable business growth.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="glass-card glass-card--premium"
              style={{
                padding: "36px",
                transition: "all .35s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                  marginBottom: "26px",
                  color: "#fff",
                }}
              >
                {solution.icon}
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                {solution.title}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                {solution.description}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#60a5fa",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}