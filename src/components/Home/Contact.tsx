import {
    Mail,
    MapPin,
    Globe,
    ArrowRight,
  } from "lucide-react";
  
  export default function Contact() {
    return (
      <section
        id="contact"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="container">
  
          <div
            className="glass-card glass-card--premium"
            style={{
              padding: "70px",
              borderRadius: "32px",
              textAlign: "center",
            }}
          >
  
            <div className="section-label" style={{ justifyContent: "center" }}>
              CONTACT US
            </div>
  
            <h2 className="section-title">
              Let's Build
              <span className="gradient-text">
                {" "}The Future Together
              </span>
            </h2>
  
            <p
              className="section-subtitle"
              style={{
                maxWidth: "700px",
                margin: "24px auto 60px",
              }}
            >
              Whether you're looking to implement Artificial Intelligence,
              develop enterprise software or accelerate digital transformation,
              we'd love to hear from you.
            </p>
  
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: "30px",
                textAlign: "left",
              }}
            >
  
              <div className="glass-card" style={{ padding: "30px" }}>
                <MapPin className="text-cyan-400" />
                <h3 style={{ marginTop: "18px" }}>Office</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Calicut University<br />
                  Malappuram<br />
                  Kerala, India
                </p>
              </div>
  
              <div className="glass-card" style={{ padding: "30px" }}>
                <Mail className="text-cyan-400" />
                <h3 style={{ marginTop: "18px" }}>Email</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  rahul@fulmentechnology.in
                </p>
              </div>
  
              <div className="glass-card" style={{ padding: "30px" }}>
                <Globe className="text-cyan-400" />
                <h3 style={{ marginTop: "18px" }}>Website</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  www.fulmentechnology.in
                </p>
              </div>
  
            </div>
  
            <button
              className="btn-glass btn-glass-primary"
              style={{
                marginTop: "60px",
              }}
            >
              Schedule a Consultation
  
              <ArrowRight size={18} />
            </button>
  
          </div>
  
        </div>
      </section>
    );
  }