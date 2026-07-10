import { ArrowRight, Brain, Car, ShoppingCart } from "lucide-react";

const products = [
  {
    icon: <Brain size={34} />,
    title: "FutureForge AI",
    category: "Enterprise AI Platform",
    description:
      "An intelligent AI platform that helps organizations automate operations, deploy AI assistants, improve productivity, and accelerate digital transformation.",
    button: "Learn More",
  },
  {
    icon: <Car size={34} />,
    title: "AutoMentor",
    category: "Automotive Intelligence Platform",
    description:
      "AI-powered automotive software designed to simplify workshop operations, service management, customer engagement, and business analytics.",
    button: "Learn More",
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "GrowFast",
    category: "E-Commerce Platform",
    description:
      "A modern e-commerce platform that enables businesses to manage products, inventory, customers, payments, orders, and online sales from one place.",
    button: "Learn More",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      style={{
        padding: "110px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 70px",
          }}
        >
          <div
            className="section-label"
            style={{
              justifyContent: "center",
            }}
          >
            DIGITAL PRODUCTS & PLATFORMS
          </div>

          <h2 className="section-title">
            Technology Built by
            <span className="gradient-text">
              {" "}Fulmen Technology
            </span>
          </h2>

          <p
            className="section-subtitle"
            style={{
              margin: "25px auto 0",
            }}
          >
            Our innovative platforms are designed to help businesses
            embrace Artificial Intelligence, automation, digital commerce
            and industry-specific transformation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.title}
              className="glass-card glass-card--premium"
              style={{
                padding: "36px",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg,#2563eb,#9333ea)",
                  marginBottom: "28px",
                }}
              >
                {product.icon}
              </div>

              <span
                style={{
                  color: "var(--blue-400)",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                {product.category}
              </span>

              <h3
                style={{
                  fontSize: "28px",
                  margin: "14px 0",
                }}
              >
                {product.title}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  minHeight: "120px",
                }}
              >
                {product.description}
              </p>

              <button
                className="btn-glass btn-glass-primary"
                style={{
                  marginTop: "30px",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                {product.button}

                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}