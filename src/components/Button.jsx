import { motion } from 'framer-motion'

// Button component with different styles and animations
const Button = ({ 
  children, 
  primary = false, 
  outline = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = "btn"
  const styleClasses = primary 
    ? "btn-primary" 
    : outline 
      ? "btn-outline" 
      : "bg-white text-primary hover:bg-secondary"
  
  return (
    <motion.a
      className={`${baseClasses} ${styleClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export default Button