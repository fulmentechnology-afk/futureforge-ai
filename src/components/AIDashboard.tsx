import { useEffect, useState } from 'react'
import './AIDashboard.css'

const tabs = ['Overview', 'Models', 'Analytics'] as const
type Tab = (typeof tabs)[number]

const chartData = [42, 68, 55, 82, 71, 93, 78, 88, 65, 95, 72, 86]

const activityFeed = [
  { time: '2s ago', text: 'Model GPT-4o deployed successfully', type: 'success' },
  { time: '14s ago', text: 'Auto-scaling triggered — 3 new nodes', type: 'info' },
  { time: '28s ago', text: 'Fine-tune job completed (98.7% accuracy)', type: 'success' },
  { time: '1m ago', text: 'API rate limit adjusted for Pro tier', type: 'info' },
]

export function AIDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview')
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [requests, setRequests] = useState(12400)
  const [accuracy, setAccuracy] = useState(98.7)
  const [typedText, setTypedText] = useState('')
  const prompt = 'Analyze customer sentiment across Q4 data...'

  useEffect(() => {
    let i = 0
    let direction = 1
    const interval = setInterval(() => {
      i += direction
      if (i >= prompt.length) {
        direction = -1
        i = prompt.length
      } else if (i <= 0) {
        direction = 1
        i = 0
      }
      setTypedText(prompt.slice(0, i))
    }, 70)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRequests((r) => r + Math.floor(Math.random() * 80 - 20))
      setAccuracy((a) => Math.min(99.9, Math.max(97, a + (Math.random() - 0.5) * 0.2)))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="ai-dashboard glass-card glass-card--premium">
      <div className="ai-dashboard__glow" />

      <div className="ai-dashboard__header">
        <div className="ai-dashboard__dots">
          <span /><span /><span />
        </div>
        <span className="ai-dashboard__title">FutureForge Command Center</span>
        <span className="ai-dashboard__status">
          <span className="ai-dashboard__status-dot" />
          Live
        </span>
      </div>

      <div className="ai-dashboard__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`ai-dashboard__tab ${activeTab === tab ? 'ai-dashboard__tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="ai-dashboard__body">
        <div className="ai-dashboard__prompt glass-card glass-card--inner">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2a4 4 0 014 4v1h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="ai-dashboard__prompt-text">
            {typedText}
            <span className="ai-dashboard__cursor">|</span>
          </span>
        </div>

        <div className="ai-dashboard__grid">
          <div className="ai-dashboard__chart-panel glass-card glass-card--inner">
            <div className="ai-dashboard__panel-header">
              <span>Inference Volume</span>
              {hoveredBar !== null && (
                <span className="ai-dashboard__chart-value">{chartData[hoveredBar]}k req</span>
              )}
            </div>
            <div className="ai-dashboard__chart">
              {chartData.map((h, i) => (
                <div
                  key={i}
                  className={`ai-dashboard__bar ${hoveredBar === i ? 'ai-dashboard__bar--active' : ''}`}
                  style={{ height: `${h}%` }}
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                />
              ))}
            </div>
          </div>

          <div className="ai-dashboard__metrics">
            <div className="ai-dashboard__metric glass-card glass-card--inner">
              <span className="ai-dashboard__metric-icon ai-dashboard__metric-icon--blue">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <span className="ai-dashboard__metric-label">Models Active</span>
                <span className="ai-dashboard__metric-value">24</span>
              </div>
            </div>
            <div className="ai-dashboard__metric glass-card glass-card--inner">
              <span className="ai-dashboard__metric-icon ai-dashboard__metric-icon--purple">
                <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <span className="ai-dashboard__metric-label">Requests / sec</span>
                <span className="ai-dashboard__metric-value">{(requests / 1000).toFixed(1)}k</span>
              </div>
            </div>
            <div className="ai-dashboard__metric glass-card glass-card--inner">
              <span className="ai-dashboard__metric-icon ai-dashboard__metric-icon--cyan">
                <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <span className="ai-dashboard__metric-label">Accuracy</span>
                <span className="ai-dashboard__metric-value">{accuracy.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-dashboard__feed glass-card glass-card--inner">
          <span className="ai-dashboard__feed-title">Live Activity</span>
          <ul className="ai-dashboard__feed-list">
            {activityFeed.map((item) => (
              <li key={item.text} className={`ai-dashboard__feed-item ai-dashboard__feed-item--${item.type}`}>
                <span className="ai-dashboard__feed-dot" />
                <span className="ai-dashboard__feed-text">{item.text}</span>
                <span className="ai-dashboard__feed-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ai-dashboard__float ai-dashboard__float--1 glass-card glass-card--premium">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <strong>Real-time inference</strong>
          <span>&lt;50ms latency</span>
        </div>
      </div>
      <div className="ai-dashboard__float ai-dashboard__float--2 glass-card glass-card--premium">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <strong>Enterprise secure</strong>
          <span>SOC 2 compliant</span>
        </div>
      </div>
    </div>
  )
}
