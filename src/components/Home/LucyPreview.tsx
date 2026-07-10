import { Bot, Sparkles, ArrowRight } from "lucide-react";

export default function LucyPreview() {
  return (
    <div
      className="glass-card glass-card--premium"
      style={{
        flex: 1,
        maxWidth: "430px",
        padding: "32px",
        borderRadius: "28px",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            width: "54px",
            height: "54px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#3b82f6,#8b5cf6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Bot size={26} color="white" />
        </div>

        <div>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            Lucy AI
          </h3>

          <span
            style={{
              color: "#22c55e",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ● Online
          </span>
        </div>
      </div>

      {/* Message */}

      <div
        className="glass-card glass-card--inner"
        style={{
          padding: "24px",
          borderRadius: "18px",
        }}
      >
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.8,
          }}
        >
          👋 Hello!

          <br />
          <br />

          Welcome to <strong>Fulmen Technology</strong>.

          <br />
          <br />

          I can help you discover:

          <br />
          <br />

          ✓ Enterprise AI Solutions

          <br />

          ✓ Intelligent Automation

          <br />

          ✓ Custom Software Development

          <br />

          ✓ Digital Transformation
        </p>
      </div>

      {/* CTA */}

      <button
        className="btn-glass btn-glass-primary"
        style={{
          width: "100%",
          marginTop: "28px",
          justifyContent: "center",
        }}
      >
        <Sparkles size={18} />

        Talk to Lucy

        <ArrowRight size={18} />
      </button>
    </div>
  );
}