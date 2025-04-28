import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 2,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 3,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 4,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 5,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  }
]

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage)
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  )

  return (
    <section className="py-16" id="testimonials">
      <div className="container-custom flex flex-col items-center lg:max-w-[1500px] lg:px-[13rem]">
        <motion.h2 
          className="text-[#0649E7] text-2xl font-medium mb-20 text-left w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What our clients have to say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-full justify-items-center">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border border-[#0649E7] bg-white w-[320px] h-[340px] flex flex-col justify-between"
            >
              {/* Top (video placeholder) */}
              <div className="flex flex-col items-center justify-center h-[170px] bg-white">
                <div className="w-10 h-10 bg-[#0649E7] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Bottom (testimonial text and arrow button) */}
              <div className="relative bg-[#0649E7] flex-1 flex flex-col p-4 pt-0 rounded-b-2xl">
                <p className="text-white text-sm leading-snug mt-4 mb-8">
                  Holly is a <span className="font-bold">senior executive</span> who got over <span className="font-bold">10 job interviews</span> and an offer she accepted for job
                </p>
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                  <svg className="text-[#0649E7] -rotate-45" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-6 w-full">
          <button 
            className="px-8 py-2 border border-[#0649E7] text-[#0649E7] rounded-full bg-white hover:bg-[#f0f6ff] transition-colors flex items-center font-medium"
            onClick={() => setCurrentPage(prev => (prev + 1) % pageCount)}
          >
            More customer testimonials
            <svg className="ml-2 -rotate-45" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          <a 
            href="#get-started" 
            className="px-8 py-2 bg-[#0649E7] text-white rounded-full font-medium flex items-center hover:bg-[#053bb3] transition-colors"
          >
            Get Started
            <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials