import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center overflow-hidden relative"
      id="home"
      style={{
        background: "linear-gradient(45deg, #c7b6f7 0%,rgb(46, 94, 252) 50%, #00123a 95%)"
      }}
    >
      <div className="container-custom mt-2 md:mt-10 lg:max-w-[1500px]">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-4/5 text-left"
          >
            <h1 className="text-white w-full text-6xl lg:text-7xl font-sora leading-tight mb-6">
              Land job interviews
              <br />
              <span className="text-[#0649E7]">10x</span> faster
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              Custom-built resumes that match your goals, keywords, and recruiter expectations.
            </p>
            <motion.a
              href="#get-started"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-dark rounded-full font-medium hover:bg-opacity-90 transition-all"
              
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg className="text-primary-dark ml-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>


            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block lg:w-1/4 relative"
          >
            <div className="relative max-w-md mx-auto">
              <img
                src="/assets/e-book.png"
                alt="2024/2025 Hiring Trends"
                className="w-72 h-76"
              />
              {/* Blurred circular background and floating book icon */}
              <div className="absolute -bottom-10 -right-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/40">
                  <img
                    src="/assets/book-icon.png"
                    alt="Book Icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className='bg-white absolute top-20 left-3 rounded-full p-0.5 rotate-[135deg]'>
                  <svg className="text-primary-dark" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center text-white mt-10 text-sm hover:text-blue-300 transition-colors">
              <a href="#" >
                Download Free E-Book
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero