import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src={isScrolled ? "/assets/logo_blue.png" : "/assets/logo_white.png"} 
              alt="MobuisEngine" 
              className="h-8" 
            />
            <span className={`font-sora text-xl ${isScrolled ? 'text-primary-dark' : 'text-white'}`}>MobuisEngine</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-12">
              <li><a href="#" className={`font-medium transition-colors ${isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white/80'}`}>Home</a></li>
              <li><a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white/80'}`}>About Us</a></li>
              <li><a href="#pricing" className={`font-medium transition-colors ${isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white/80'}`}>Plans</a></li>
              <li><a href="#testimonials" className={`font-medium transition-colors ${isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white/80'}`}>Testimonials</a></li>
              <li><a href="#" className={`font-medium transition-colors ${isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white/80'}`}>Privacy Policy</a></li>
              <li className="relative">
                <a href="#" className={`font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white/80'}`}>
                  More
                  <svg className='ml-1 mt-1' width="10" height="5" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.61211 5.45426L0.0799255 0.130918H11.1443L5.61211 5.45426Z" fill="#FEFEFE" />
                  </svg>

                </a>
              </li>
            </ul>

          </div>

          <div className="hidden lg:block">
            <a
              href="#get-started"
              className="px-6 py-3 bg-white text-primary-dark rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Get Started
            </a>
          </div>


          {/* Hamburger menu button - only visible on mobile */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={isScrolled ? '#0649E7' : '#FFFFFF'} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Close button - visible when mobile menu is open */}
          {isMobileMenuOpen && (
            <button 
              className="absolute top-4 right-4 z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0649E7" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </nav>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white w-full shadow-lg top-0 left-0 z-40 absolute"
        >
          <div className="container-custom py-4">
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="block py-2 text-black hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="block py-2 text-black hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
              <li><a href="#pricing" className="block py-2 text-black hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Plans</a></li>
              <li><a href="#testimonials" className="block py-2 text-black hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a></li>
              <li><a href="#" className="block py-2 text-black hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</a></li>
              <li><a href="#" className="block py-2 text-black hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>More</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar