import { AnimatedBackground } from './components/AnimatedBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Logos } from './components/Logos'
import { Features } from './components/Features'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
