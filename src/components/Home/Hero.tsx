import HeroContent from "./HeroContent";
import LucyPreview from "./LucyPreview";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 0 80px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          <HeroContent />
          <LucyPreview />
        </div>
      </div>
    </section>
  );
}