import { useReveal } from '../hooks/useReveal'
import './Testimonials.css'

const testimonials = [
  {
    quote:
      'FutureForge AI cut our deployment time from weeks to hours. The platform is incredibly intuitive and the performance is unmatched.',
    name: 'Sarah Chen',
    role: 'CTO, NovaTech',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote:
      'We evaluated six AI platforms before choosing FutureForge. The enterprise security and real-time analytics sealed the deal for us.',
    name: 'Marcus Williams',
    role: 'VP Engineering, Quantum Labs',
    avatar: 'MW',
    rating: 5,
  },
  {
    quote:
      'The ROI was visible within the first month. Our team productivity increased 3x and inference costs dropped by over 50%.',
    name: 'Priya Sharma',
    role: 'Head of AI, Vertex AI',
    avatar: 'PS',
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, visible } = useReveal()

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`testimonials__header reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Loved by teams{' '}
            <span className="gradient-text">everywhere</span>
          </h2>
          <p className="section-subtitle">
            See why industry leaders choose FutureForge AI to power their
            most critical AI workloads.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`testimonials__card glass-card glass-card--premium reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="testimonials__quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
