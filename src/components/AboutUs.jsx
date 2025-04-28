import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: "Robert J. Parker",
    role: "Co-founder and CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Robert is the founder of MobuisEngine with a background in recruitment and HR technology. He's passionate about creating efficient hiring processes for both companies and job seekers. Previously worked as Head of Talent Acquisition at Fortune 500 companies for over 15 years before founding MobuisEngine."
  },
  {
    name: "Michelle Lin",
    role: "Chief Operating Officer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Michelle is an expert in talent acquisition with a passion for connecting the right people with the right opportunities. With a background in organizational psychology, she's helped hundreds of professionals land their dream jobs. She leads our operations team to ensure smooth processes and exceptional customer service."
  },

]

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a1633] to-[#0649e7] min-h-screen" id="about">
      <div className="container-custom lg:max-w-[1500px] lg:px-[13rem]">
        <motion.h2
          className="text-white text-2xl font-medium mb-12 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        <div className="flex flex-col justify-center items-center gap-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center  gap-10"
            >
              <div className="relative flex-shrink-0 flex justify-center items-center">
                <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-8 -right-3"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 border border-white flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <div className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8 0 24.1 24.1 0 53.8 0c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.4V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.9V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.7-48.4 87.8-48.4 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </div>

                  </div>
                </a>
              </div>
              <div className="max-w-xl flex justify-center items-center text-white text-left text-sm md:text-base whitespace-pre-line">
                {member.description}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col justify-center items-center text-center space-y-2">
          <a href="#" className="text-white/80 hover:text-white flex  transition-colors text-sm">
            Learn more about our Board of Advisors
            <svg className="text-white mt-1 ml-1 -rotate-45" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </a>

          <a href="#" className="text-white/80 flex hover:text-white transition-colors text-sm">
            Follow us on our Linkedin page
            <svg className="text-white mt-1 ml-1 -rotate-45" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs