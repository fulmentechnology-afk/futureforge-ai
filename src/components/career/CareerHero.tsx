export default function CareerHero() {
  return (
    <section
      style={{
        padding: "120px 0",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          className="glass-card glass-card--premium fade-in"
          style={{
            padding: "80px 60px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Badge */}

          <div
            className="section-label"
            style={{
              justifyContent: "center",
              marginBottom: "25px",
            }}
          >
            Careers at Fulmen Technology Pvt. Ltd.
          </div>

          {/* Heading */}

          <h1
            className="section-title"
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Build Your Career
            <br />
            <span className="gradient-text">
              With Fulmen Technology
            </span>
          </h1>

          {/* Subtitle */}

          <p
            className="section-subtitle"
            style={{
              margin: "35px auto 0",
              maxWidth: "760px",
              textAlign: "center",
            }}
          >
            Join the creators of <strong>FutureForge AI</strong>,
            <strong> AutoMentor</strong> and{" "}
            <strong>GrowFast</strong>.

            <br />
            <br />

            We build enterprise AI solutions, intelligent automation,
            modern software platforms and digital products that help
            businesses innovate and grow.
          </p>

          {/* Buttons */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "45px",
            }}
          >
            <button
              style={{
                background: "var(--gradient-primary)",
                color: "#fff",
                padding: "16px 36px",
                borderRadius: "14px",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Explore Opportunities
            </button>

            <button
              className="glass-card"
              style={{
                padding: "16px 36px",
                borderRadius: "14px",
                color: "#fff",
              }}
            >
              Life at Fulmen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}