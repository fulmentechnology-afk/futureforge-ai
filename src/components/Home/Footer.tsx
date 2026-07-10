export default function Footer() {
    return (
      <footer
        style={{
          padding: "70px 0 40px",
        }}
      >
        <div className="container">
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "40px",
            }}
          >
  
            <div>
  
              <h2 className="gradient-text">
                Fulmen Technology
              </h2>
  
              <p
                style={{
                  marginTop: "20px",
                  color: "var(--text-secondary)",
                  maxWidth: "420px",
                }}
              >
                Engineering intelligent business solutions through
                Artificial Intelligence, enterprise software,
                automation and digital innovation.
              </p>
  
            </div>
  
            <div>
  
              <h3>Products</h3>
  
              <p>FutureForge AI</p>
  
              <p>AutoMentor</p>
  
              <p>GrowFast</p>
  
            </div>
  
            <div>
  
              <h3>Company</h3>
  
              <p>About</p>
  
              <p>Solutions</p>
  
              <p>Careers</p>
  
              <p>Contact</p>
  
            </div>
  
          </div>
  
          <hr
            style={{
              margin: "50px 0 25px",
              opacity: 0.15,
            }}
          />
  
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
            }}
          >
            © 2026 Fulmen Technology Pvt. Ltd.
            All Rights Reserved.
          </p>
  
        </div>
      </footer>
    );
  }