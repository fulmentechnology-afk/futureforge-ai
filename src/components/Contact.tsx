import { useState, type FormEvent } from 'react'
import emailjs from "@emailjs/browser";
import { useReveal } from '../hooks/useReveal'
import { Button } from './Button'
import './Contact.css'

export function Contact() {
  const { ref, visible } = useReveal()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
  
    try {
      await emailjs.sendForm(
        "service_fulmen",
        "template_4zhjd9e",
        form,
        "6AAvD4m5YnUGJsF3p"
      );
  
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
    };
  

  return (
    <section className="contact" id="contact">
      <div className="contact__glow" />
      <div className="container">
        <div className="contact__layout">
          <div ref={ref as React.RefObject<HTMLDivElement>} className={`contact__info reveal ${visible ? 'visible' : ''}`}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let&apos;s build something{' '}
              <span className="gradient-text">extraordinary</span>
            </h2>
            <p className="section-subtitle">
              Ready to transform your business with AI? Reach out and our team
              will get back to you within 24 hours.
            </p>

            <div className="contact__details">
              <div className="contact__detail glass-card glass-card--premium">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <a href="mailto:rahul@fulmentechnology.in">rahul@fulmentechnology.in</a>
                </div>
              </div>
              <div className="contact__detail glass-card glass-card--premium">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <span className="contact__detail-label">Office</span>
                  <span>Calicut University,Malappuram,Kerala,India</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`contact__form-wrapper glass-card glass-card--premium reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Thank you!</h3>
                <p>We&apos;ve received your message and will be in touch soon.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field-row">
                  <div className="contact__field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="Name" name="Name" required placeholder="Rahul" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Ramesh" />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" required placeholder="rahul@fulmentechnology.in" />
                </div>
                <div className="contact__field">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Fulmen Technology Pvt Ltd" />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} required placeholder="Tell us about your AI Automation Requirements..." />
                </div>
                <div className="contact__actions">
                  <Button variant="primary" size="lg" type="submit">
                    Book Demo
                  </Button>
                  <Button variant="secondary" size="lg" href="#pricing">
                    Get Started
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
