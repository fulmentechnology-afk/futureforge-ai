const stats = [
    {
      value: "15+",
      title: "Open Positions",
    },
    {
      value: "3",
      title: "Technology Products",
    },
    {
      value: "10+",
      title: "Industries Served",
    },
    {
      value: "100%",
      title: "Innovation Driven",
    },
  ];
  
  export default function CompanyStats() {
    return (
      <section style={{ padding: "80px 0" }}>
        <div className="container">
  
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              COMPANY OVERVIEW
            </div>
  
            <h2 className="section-title">
              Building the Future
              <span className="gradient-text"> Together</span>
            </h2>
  
            <p
              className="section-subtitle"
              style={{
                margin: "20px auto 0",
                textAlign: "center",
              }}
            >
              Fulmen Technology develops AI solutions, enterprise software,
              and digital products for businesses across multiple industries.
            </p>
          </div>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "24px",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="glass-card glass-card--premium"
                style={{
                  padding: "40px",
                  textAlign: "center",
                }}
              >
                <h2
                  className="gradient-text"
                  style={{
                    fontSize: "52px",
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </h2>
  
                <p
                  style={{
                    marginTop: "12px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }