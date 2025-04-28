import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import Pricing from './components/Pricing'
import ResumeServices from './components/ResumeServices'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <HowItWorks />
        <AboutUs />
        <Testimonials />
        <Features />
        <Pricing />
        <div className="border-2 w-full md:max-w-[1500px] mx-auto my-6 sm:my-8 md:my-10" />
        <ResumeServices />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App