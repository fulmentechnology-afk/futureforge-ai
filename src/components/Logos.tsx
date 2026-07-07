import { useReveal } from '../hooks/useReveal'
import './Logos.css'

const logos = [
  'Acme Corp',
  'NovaTech',
  'Quantum Labs',
  'Vertex AI',
  'Helix Systems',
  'Pulse Digital',
  'Axiom Group',
  'Zenith Cloud',
]

export function Logos() {
  const { ref, visible } = useReveal()

  return (
    <section className="logos">
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`logos__inner reveal ${visible ? 'visible' : ''}`}>
          <p className="logos__label">Trusted by innovative teams worldwide</p>
          <div className="logos__track">
            <div className="logos__scroll">
              {[...logos, ...logos].map((name, i) => (
                <div key={`${name}-${i}`} className="logos__item glass-card glass-card--premium">
                  <span className="logos__icon">{name.charAt(0)}</span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
