import { motion } from 'framer-motion'

const resumeServices = [
  {
    name: "Resume Rebuild",
    price: "$1000",
    period: "one-time",
    description: "Professional resume redesign from the ground up here for fairer compensation",
    features: [
      "ATS-optimized design",
      "Keyword optimization",
      "2 rounds of revisions",
      "Cover letter template",
      "LinkedIn profile optimization",
      "Follow-up support for 30 days",
      "Resume review",
      "LinkedIn profile review",
    ]
  },
  {
    name: "Interview Prep",
    price: "$500",
    period: "one-time",
    description: "Comprehensive interview preparation service to help you ace your interviews",
    features: [
      "4 mock interview sessions",
      "Personalized feedback",
      "Industry-specific question prep",
      "Behavioral question coaching",
      "Salary negotiation strategies",
      "Follow-up email templates",
      "Resume review",
      "LinkedIn profile review",
        
    ]
  }
]

const ResumeServices = () => {
  return (
    <section className="section" id="resume-services">
      <div className="container-custom lg:max-w-[1500px] lg:px-[13rem]">


        <motion.div
          className="text-3xl font-medium text-[#0649E7] mb-20 text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium text-[#0649E7] text-start">Resume Building & Coaching</h2>
          <p className="text-black/70 max-w-xl text-sm">Our one-time professional services to get your career search materials in top shape</p>
          <p className='text-sm font-bold text-black/70'>Schedule a call to get started.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-40 gap-8">
          {resumeServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card border border-gray-200 h-full flex flex-col"
            >
              <h3 className="text-xl font-sora text-primary-dark">{service.name}</h3>
              <p className="text-black/70 mb-4 text-sm">{service.description}</p>

              <div className="mb-8 py-6 border-b-2">
                <span className="text-4xl font-sora text-primary-dark">{service.price}</span>
                <span className="text-black/60"> {service.period}</span>
              </div>


              <div className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <svg className=" mr-2 mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257" />
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2" />
                    </svg>

                    <span className="text-sm text-black/80">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#get-started"
                className="btn btn-primary mt-7 self-start"
              >
                Get Started
                <svg className='ml-1 text-white' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeServices