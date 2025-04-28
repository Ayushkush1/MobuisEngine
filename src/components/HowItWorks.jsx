import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    description: "Submit Intake Form"
  },
  {
    number: 2,
    description: "We do the search and curation for list of jobs"
  },
  {
    number: 3,
    description: "You approve, we do the tedious part (applying)"
  },
  {
    number: 4,
    description: "You get the interviews"
  }
]

const HowItWorks = () => {
  return (
    <section className="py-32" id="how-it-works">
      <div className="container-custom lg:max-w-[1500px] lg:px-[13rem] flex flex-col justify-center items">
        
        <motion.h2 
          className="text-3xl font-medium text-[#0649E7] mb-20 md:text-start text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How we work?
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row lg:items-start lg:items-center gap-20 ">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col lg:w-56"
            >
              <div className="flex flex-col items-start mb-2 w-full">
                <div className="w-12 h-12 p-8 rounded-full border-2 border-primary-dark flex items-center justify-center text-5xl font-semi-bold text-black bg-white">
                  {step.number}
                </div>
                <div className="w-full border-b-2 border-[#0649E7] mt-3 mb-2"></div>
              </div>
              <div className="text-[#0649E7] text-lg font-bold leading-snug">
                {step.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks