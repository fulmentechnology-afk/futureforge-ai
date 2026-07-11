import { Button } from "./Button";
import { AIDashboard } from "./AIDashboard";
import "./Hero.css";

const stats = [
  {
    value: "AI",
    label: "Business Automation",
  },
  {
    value: "24/7",
    label: "Intelligent Operations",
  },
  {
    value: "Multi",
    label: "Industry Solutions",
  },
];

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__content">

        <div className="hero__badge fade-in">
          <span className="hero__badge-dot" />
          Enterprise AI • Automation • Digital Transformation
        </div>

        <h1 className="hero__title fade-in fade-in-delay-1">
          Engineering{" "}
          <span className="gradient-text">
            Intelligent Business
          </span>
          <br />
          Experiences
        </h1>

        <p className="hero__subtitle fade-in fade-in-delay-2">
          Fulmen Technology empowers enterprises with Artificial Intelligence,
          intelligent automation, enterprise software, AI agents and digital
          transformation solutions that improve operational efficiency,
          accelerate business growth and reduce repetitive work.
        </p>

        <div className="hero__actions fade-in fade-in-delay-3">
          <Button variant="primary" size="lg" href="#contact">
            Schedule Strategy Call
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#solutions"
          >
            Explore Solutions
          </Button>
        </div>

        <div className="hero__stats fade-in fade-in-delay-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="hero__stat glass-card glass-card--premium"
            >
              <span className="hero__stat-value">
                {stat.value}
              </span>

              <span className="hero__stat-label">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="hero__visual fade-in fade-in-delay-4">
          <AIDashboard />
        </div>
      </div>
    </section>
  );
}