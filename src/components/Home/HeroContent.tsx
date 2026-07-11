export default function HeroContent() {
    return (
      <div
        style={{
          flex: 1,
          maxWidth: "650px",
        }}
      >
        <div className="section-label">
          ENTERPRISE AI • SOFTWARE • AUTOMATION
        </div>
  
        <h1
          style={{
            fontSize: "clamp(3.5rem,7vw,5.8rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: "20px",
          }}
        >
          Engineering the Future
          <br />
  
          <span className="gradient-text">
            of Intelligent Business
          </span>
        </h1>
  
        <p
          className="section-subtitle"
          style={{
            marginTop: "30px",
            maxWidth: "620px",
          }}
        >
          Fulmen Technology Pvt. Ltd. develops Enterprise AI Solutions,
          Intelligent Automation, Custom Software and Digital
          Transformation platforms that help organizations innovate,
          automate and grow with confidence.
        </p>
  
        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "45px",
            flexWrap: "wrap",
          }}
        >
          <button className="btn-glass btn-glass-primary">
            Discover Our Solutions
          </button>
  
          <button
  className="btn-glass btn-glass-secondary"
  onClick={() => {
    window.dispatchEvent(new Event("open-lucy"));
  }}
>
  AI Consultant
</button>
        </div>
      </div>
    );
  }