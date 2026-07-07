import { Button } from './Button'
import { AIDashboard } from './AIDashboard'
import './Hero.css'

  const stats = [
    { value: '50+', label: 'Enterprise Clients' },
    { value: '250+', label: 'AI Automations' },
    { value: '99.99%', label: 'Platform Uptime' },
  ];

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__content">
        <div className="hero__badge fade-in">
          <span className="hero__badge-dot" />
          Next-generation AI platform
        </div>

        <h1 className="hero__title fade-in fade-in-delay-1">
          Build Enterprise AI solutions That Scale
        </h1>

        <p className="hero__subtitle fade-in fade-in-delay-2">
        Automate business processes with AI agents, intelligent workflows, chatbots, and enterprise automation solutions built by Fulmen Technology Pvt Ltd.
        </p>

        <div className="hero__actions fade-in fade-in-delay-3">
          <Button variant="primary" size="lg" href="#contact">
            Schedule Demo 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button variant="secondary" size="lg" href="#pricing">
            Get Started
          </Button>
        </div>

        <div className="hero__stats fade-in fade-in-delay-4">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat glass-card glass-card--premium">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__visual fade-in fade-in-delay-4">
          <AIDashboard />
        </div>
      </div>
    </section>
  )
}
