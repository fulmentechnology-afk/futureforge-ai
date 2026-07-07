import { useReveal } from '../hooks/useReveal'
import { Button } from './Button'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for individuals and small teams getting started with AI.',
    features: [
      'Up to 5 AI models',
      '10,000 requests/month',
      'Basic analytics',
      'Email support',
      'Community access',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: '199',
    description: 'For growing teams that need power, speed, and collaboration.',
    features: [
      'Unlimited AI models',
      '100,000 requests/month',
      'Advanced analytics',
      'Priority support',
      'Team workspaces',
      'Custom integrations',
      'SLA guarantee',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for organizations with complex requirements.',
    features: [
      'Everything in Professional',
      'Unlimited requests',
      'Dedicated infrastructure',
      '24/7 phone support',
      'Custom model training',
      'On-premise deployment',
      'Compliance packages',
    ],
    featured: false,
  },
]

export function Pricing() {
  const { ref, visible } = useReveal()

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`pricing__header reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="section-subtitle">
            Start free, scale as you grow. No hidden fees, no surprises — just
            powerful AI at every tier.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`pricing__card glass-card glass-card--premium reveal ${visible ? 'visible' : ''} ${plan.featured ? 'pricing__card--featured' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {plan.featured && (
                <span className="pricing__badge">Most Popular</span>
              )}
              <h3 className="pricing__name">{plan.name}</h3>
              <div className="pricing__price">
                {plan.price === 'Custom' ? (
                  <span className="pricing__amount">Custom</span>
                ) : (
                  <>
                    <span className="pricing__currency">$</span>
                    <span className="pricing__amount">{plan.price}</span>
                    <span className="pricing__period">/mo</span>
                  </>
                )}
              </div>
              <p className="pricing__desc">{plan.description}</p>
              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? 'primary' : 'secondary'}
                size="lg"
                href="#contact"
                className="pricing__cta"
              >
                {plan.price === 'Custom' ? 'Book Demo' : 'Get Started'}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
