import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: "Agile Promo",
    price: "$35",
    period: "/month",
    featured: false,
    features: [
      "AI-powered resume analysis",
      "Automated application tracking",
      "Access to basic job database",
      "1 resume revision",
      "Email support"
    ]
  },
  {
    name: "Starter",
    price: "$50",
    period: "/month",
    featured: true,
    features: [
      "Everything in Agile Promo",
      "3 professional resume revisions",
      "Cover letter template library",
      "Job match recommendations",
      "Email and chat support"
    ]
  },
  {
    name: "Plus",
    price: "$100",
    period: "/month",
    featured: false,
    features: [
      "Everything in Starter",
      "Unlimited resume revisions",
      "Custom cover letters",
      "Priority application submission",
      "Weekly 1:1 coaching sessions",
      "Interview preparation"
    ]
  }
]

const advancedPlan = {
  name: "Advanced",
  price: "$150",
  period: "/month",
  description: "All-inclusive package for premium job search support",
  features: [
    "Everything in Plus",
    "Dedicated career coach",
    "Executive resume writing",
    "Personal branding strategy",

  ]
}

const Pricing = () => {
  return (
    <section className="section bg-white" id="pricing">
      <div className="container-custom lg:max-w-[1500px] lg:px-[13rem]">


        <motion.h2
          className="text-3xl font-medium text-[#0649E7] mb-20 text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Job Application Service Plans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card border ${plan.featured ? 'border-primary' : 'border-gray-200'} rounded-20 overflow-hidden flex flex-col h-full`}
            >
              {plan.featured && (
                <div className=" w-full flex justify-end">
                  <p className='bg-primary text-white  px-4 w-fit py-1 text-xs rounded-full font-medium'>POPULAR</p>
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-sora text-black mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-sora text-primary-dark">{plan.price}</span>
                  <span className="text-black/60">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#4AD257" />
                        <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2" />
                      </svg>

                      <span className="text-black/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#get-started"
                  className={`btn w-full ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get Started
                  <svg className={`${plan.featured ? 'text-white' : 'text-[#0649E7]'} ml-1`} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-blue rounded-20 overflow-hidden text-white"
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center mb-6">
              <div className='border-b-2 border-[#BCBCBC] pb-8'>
                <h3 className="text-2xl font-sora">{advancedPlan.name}</h3>
                <p className="text-white/80 text-sm">{advancedPlan.description}</p>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="text-3xl font-sora">{advancedPlan.price}</span>
                <span className="text-white/80">{advancedPlan.period}</span>
              </div>
            </div>



            <div className='flex flex-row justify-between'>
              <div className="flex flex-col  gap-2 ">
                {advancedPlan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <svg className='w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257" />
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2" />
                    </svg>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end items-end">
                <a
                  href="#get-started"
                  className="btn bg-white text-primary hover:bg-secondary"
                >
                  Get Started
                  <svg className="text-primary -rotate-45 ml-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </a>
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing