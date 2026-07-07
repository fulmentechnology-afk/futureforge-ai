import { useReveal } from '../hooks/useReveal'
import './Features.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Multi-Model Orchestration',
    description:
      'Deploy and manage multiple AI models from a unified control plane with intelligent routing and load balancing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Real-Time Inference',
    description:
      'Sub-50ms latency at scale with edge-optimized pipelines and automatic caching for blazing-fast responses.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Enterprise Security',
    description:
      'SOC 2 compliant with end-to-end encryption, role-based access control, and audit logging built in.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'No-Code Workflows',
    description:
      'Visual drag-and-drop builder to create complex AI pipelines without writing a single line of code.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Advanced Analytics',
    description:
      'Deep insights into model performance, cost optimization, and usage patterns with customizable dashboards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Team Collaboration',
    description:
      'Shared workspaces, version control for prompts, and seamless integration with your existing tools.',
  },
]

export function Features() {
  const { ref, visible } = useReveal()

  return (
    <section className="features" id="features">
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`features__header reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Features</span>
          <h2 className="section-title">
            Everything you need to{' '}
            <span className="gradient-text">build with AI</span>
          </h2>
          <p className="section-subtitle">
            A complete platform designed for teams who demand performance,
            security, and simplicity in equal measure.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className={`features__card glass-card glass-card--premium reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="features__icon">{feature.icon}</div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
