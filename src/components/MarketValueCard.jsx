// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MarketValueCard = ({ icon, title, description, index = 0 }) => {
  // Color schemes for each card
  const colorSchemes = [
    {
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      hoverBg: 'from-blue-500/10 via-indigo-500/10 to-purple-500/5',
      accentColor: 'from-blue-500/20 via-indigo-500/15 to-transparent',
      textHover: 'group-hover:text-blue-600',
      shadowColor: 'group-hover:shadow-blue-500/20',
      borderGlow: 'group-hover:border-blue-300/50',
      cornerAccent: 'from-blue-500/15 to-transparent'
    },
    {
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      hoverBg: 'from-purple-500/10 via-pink-500/10 to-rose-500/5',
      accentColor: 'from-purple-500/20 via-pink-500/15 to-transparent',
      textHover: 'group-hover:text-purple-600',
      shadowColor: 'group-hover:shadow-purple-500/20',
      borderGlow: 'group-hover:border-purple-300/50',
      cornerAccent: 'from-purple-500/15 to-transparent'
    },
    {
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      hoverBg: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/5',
      accentColor: 'from-emerald-500/20 via-teal-500/15 to-transparent',
      textHover: 'group-hover:text-emerald-600',
      shadowColor: 'group-hover:shadow-emerald-500/20',
      borderGlow: 'group-hover:border-emerald-300/50',
      cornerAccent: 'from-emerald-500/15 to-transparent'
    },
    {
      gradient: 'from-orange-500 via-amber-600 to-yellow-600',
      hoverBg: 'from-orange-500/10 via-amber-500/10 to-yellow-500/5',
      accentColor: 'from-orange-500/20 via-amber-500/15 to-transparent',
      textHover: 'group-hover:text-orange-600',
      shadowColor: 'group-hover:shadow-orange-500/20',
      borderGlow: 'group-hover:border-orange-300/50',
      cornerAccent: 'from-orange-500/15 to-transparent'
    }
  ];

  const colors = colorSchemes[index % colorSchemes.length];

  // Alternating animation: even indices from left, odd indices from right
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: isEven ? -100 : 100,
        y: 20
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl ${colors.shadowColor}
        transition-all duration-300 border border-gray-100 ${colors.borderGlow} overflow-hidden`}
    >
      {/* Animated gradient background orb */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${colors.accentColor} 
        rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg}
        opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className="mb-4 sm:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${colors.gradient}
            rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl 
            transition-shadow duration-300`}>
            <span className="text-2xl sm:text-3xl">{icon}</span>
          </div>
        </motion.div>

        {/* Title */}
        <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 
          ${colors.textHover} transition-colors duration-300`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.cornerAccent}
        rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Bottom gradient accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </motion.div>
  );
};

export default MarketValueCard;

