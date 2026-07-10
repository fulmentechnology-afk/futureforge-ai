const features = [
    {
      icon: "🤖",
      title: "AI Innovation",
      description:
        "Build enterprise AI solutions, intelligent automation and next-generation software products.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description:
        "Grow with a fast-moving technology company where your work has real impact.",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description:
        "Develop products that help businesses across multiple industries succeed.",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description:
        "Work with modern technologies while learning from experienced professionals.",
    },
  ];
  
  export default function WhyJoin() {
    return (
      <section style={{ padding: "100px 0" }}>
        <div className="container">
  
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              WHY JOIN US
            </div>
  
            <h2 className="section-title">
              Why Join
              <span className="gradient-text"> Fulmen Technology?</span>
            </h2>
  
            <p
              className="section-subtitle"
              style={{
                margin: "20px auto 0",
                textAlign: "center",
              }}
            >
              We're building innovative AI solutions and digital products that
              create meaningful impact for businesses worldwide.
            </p>
          </div>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card glass-card--premium"
                style={{ padding: "35px" }}
              >
                <div style={{ fontSize: "48px" }}>
                  {feature.icon}
                </div>
  
                <h3
                  style={{
                    marginTop: "25px",
                    fontSize: "26px",
                  }}
                >
                  {feature.title}
                </h3>
  
                <p
                  style={{
                    marginTop: "18px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }