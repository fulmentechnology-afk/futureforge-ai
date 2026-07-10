import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import EnterpriseSolutions from "../components/Home/EnterpriseSolutions";
import Products from "../components/Home/Products";
import Industries from "../components/Home/Industries";
import WhyFulmen from "../components/Home/WhyFulmen";
import Contact from "../components/Home/Contact";
import CareersPreview from "../components/Home/CareersPreview";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="solutions">
        <EnterpriseSolutions />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="industries">
        <Industries />
      </section>

      <WhyFulmen />

      <CareersPreview />

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}