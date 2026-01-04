// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, index = 0, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      onClick={handleClick}
      className="group relative cursor-pointer"
    >
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
        rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl 
        transition-all duration-500 border border-gray-700 overflow-hidden h-full
        hover:scale-105 hover:border-primary/50">
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-600/5 to-purple-600/10 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Glowing orb effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full 
          blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon with background */}
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 
              bg-gradient-to-br from-primary via-blue-600 to-purple-600 
              rounded-2xl shadow-lg group-hover:shadow-primary/50 
              transition-all duration-300 group-hover:rotate-6">
              <span className="text-3xl">{icon}</span>
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 
            group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-base flex-grow">
            {description}
          </p>

          {/* Arrow indicator */}
          <motion.div 
            className="mt-6 flex items-center text-primary font-semibold"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm uppercase tracking-wider">Learn More</span>
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
          from-primary via-blue-600 to-purple-600 transform scale-x-0 
          group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

