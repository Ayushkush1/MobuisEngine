import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="section bg-white" id="contact">
      <div className="container-custom  lg:max-w-[1500px] lg:px-[13rem]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-20 overflow-hidden py-10"
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h2 className="md:text-2xl text-xl font-dmsans lg:max-w-[200px] mb-2">STLL HAVE DOUBTS?</h2>
            </div>

            <p className='text-4xl font-sora text-white md:p-0 pb-6'>
            Contact us
            </p>
            <a 
              href="#" 
              className="w-14 h-14 bg-white  text-primary  hover:bg-[#EBF1FF] rounded-full flex items-center justify-center "
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact