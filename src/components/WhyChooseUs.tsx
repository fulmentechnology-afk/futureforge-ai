import { useReveal } from '../hooks/useReveal'
import { Button } from './Button'
import './WhyChooseUs.css'

const reasons = [
  {
    number: '01',
    title: 'Built for Scale',
    description:
      'From startup prototypes to enterprise deployments handling millions of requests — our infrastructure grows with you.',
  },
  {
    number: '02',
    title: 'Developer First',
    description:
      'Comprehensive SDKs, REST & GraphQL APIs, and detailed documentation so your team ships faster.',
  },
  {
    number: '03',
    title: 'Cost Optimized',
    description:
      'Intelligent model routing and auto-scaling reduce inference costs by up to 60% without sacrificing quality.',
  },
  {
    number: '04',
    title: '24/7 Expert Support',
    description:
      'Dedicated AI engineers available around the clock to help you architect, debug, and optimize your solutions.',
  },
]

const highlights = [
  { value: '60%', label: 'Cost reduction' },
  { value: '50ms', label: 'Avg latency' },
  { value: '4.9/5', label: 'Customer rating' },
  { value: '150+', label: 'Integrations' },
]

export function WhyChooseUs() {
  const { ref, visible } = useReveal()

  return (
    <section className="why-us" id="why-us">
      <div className="why-us__glow" />
      <div className="container">
        <div className="why-us__layout">
          <div ref={ref as React.RefObject<HTMLDivElement>} className={`why-us__content reveal ${visible ? 'visible' : ''}`}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              The platform trusted by{' '}
              <span className="gradient-text">industry leaders</span>
            </h2>
            <p className="section-subtitle">
              FutureForge AI isn&apos;t just another tool — it&apos;s the
              foundation for your AI strategy, built by engineers who&apos;ve
              scaled AI at the world&apos;s top companies.
            </p>

            <div className="why-us__highlights">
              {highlights.map((item) => (
                <div key={item.label} className="why-us__highlight">
                  <span className="why-us__highlight-value">{item.value}</span>
                  <span className="why-us__highlight-label">{item.label}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" href="#contact">
              Book Demo
            </Button>
          </div>

          <div className={`why-us__reasons reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            {reasons.map((reason, i) => (
              <article
                key={reason.number}
                className="why-us__reason glass-card glass-card--premium"
                style={{ transitionDelay: `${0.2 + i * 0.08}s` }}
              >
                <span className="why-us__reason-number">{reason.number}</span>
                <div>
                  <h3 className="why-us__reason-title">{reason.title}</h3>
                  <p className="why-us__reason-desc">{reason.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
