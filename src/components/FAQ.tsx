import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './FAQ.css'

const faqs = [
  {
    question: 'What is FutureForge AI?',
    answer:
      'FutureForge AI is an enterprise-grade platform for building, deploying, and scaling AI models. It provides multi-model orchestration, real-time inference, and no-code workflow builders in one unified solution.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'You can sign up and deploy your first model in under 10 minutes. Our guided onboarding walks you through setup, and our Starter plan includes everything you need to begin experimenting immediately.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. FutureForge AI is SOC 2 Type II certified with end-to-end encryption, role-based access control, and comprehensive audit logging. Enterprise customers can also opt for on-premise deployment.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer:
      'Yes. We offer 150+ native integrations plus REST and GraphQL APIs, webhooks, and SDKs for Python, TypeScript, and Go. Custom integrations are available on Pro and Enterprise plans.',
  },
  {
    question: 'What support options are available?',
    answer:
      'Starter includes email support and community access. Pro adds priority support with SLA guarantees. Enterprise customers receive 24/7 phone support with a dedicated account manager.',
  },
  {
    question: 'Can I switch plans or cancel anytime?',
    answer:
      'Yes. You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle, and we offer a 14-day money-back guarantee on all paid plans.',
  },
]

export function FAQ() {
  const { ref, visible } = useReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`faq__header reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about FutureForge AI. Can&apos;t find
            what you&apos;re looking for? Reach out to our team.
          </p>
        </div>

        <div className={`faq__list reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.question}
                className={`faq__item glass-card glass-card--premium ${isOpen ? 'faq__item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className="faq__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="faq__answer-wrapper">
                  <p className="faq__answer">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
