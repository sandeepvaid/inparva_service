// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MarketValueCard = ({ title, description, index = 0 }) => {
  // Color schemes for each card
  const colorSchemes = [
    {
      gradient: 'from-primary via-blue-600 to-blue-700',
      patternGradient: 'from-primary/80 via-blue-600/70 to-blue-700/60',
      textHover: 'group-hover:text-primary',
      shadowColor: 'group-hover:shadow-primary/20',
      borderGlow: 'group-hover:border-primary/50',
      accentGlow: 'from-primary/50 to-blue-600/30'
    },
    {
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      patternGradient: 'from-blue-600/80 via-indigo-600/70 to-purple-600/60',
      textHover: 'group-hover:text-blue-600',
      shadowColor: 'group-hover:shadow-blue-500/20',
      borderGlow: 'group-hover:border-blue-400/50',
      accentGlow: 'from-blue-500/50 to-indigo-500/30'
    },
    {
      gradient: 'from-cyan-500 via-blue-500 to-primary',
      patternGradient: 'from-cyan-500/80 via-blue-500/70 to-primary/60',
      textHover: 'group-hover:text-cyan-600',
      shadowColor: 'group-hover:shadow-cyan-500/20',
      borderGlow: 'group-hover:border-cyan-400/50',
      accentGlow: 'from-cyan-400/50 to-blue-500/30'
    }
  ];

  const colors = colorSchemes[index % colorSchemes.length];

  // Staggered animation for vertical cards
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 60,
        scale: 0.95
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -12,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className={`group relative bg-white rounded-2xl 
        shadow-[0_10px_40px_rgba(0,0,0,0.12)] 
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] 
        ${colors.shadowColor}
        transition-all duration-300 border border-gray-200 ${colors.borderGlow} overflow-hidden`}
    >
      {/* Large Gradient Header Background - Takes up top portion */}
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${colors.gradient} overflow-hidden flex items-center justify-center
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]`}>
        {/* Animated pattern overlay - More visible */}
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.15)_49%,rgba(255,255,255,0.15)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Floating orbs for depth - More prominent */}
        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${colors.accentGlow} 
          rounded-full blur-2xl opacity-80 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700`}></div>
        <div className={`absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr ${colors.accentGlow} 
          rounded-full blur-2xl opacity-80 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700`}></div>
        
        {/* Animated shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
          translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        
        {/* Title - Translucent with background visible */}
        <div className="relative z-10 px-6 sm:px-8">
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center
            text-white backdrop-blur-[20px] 
            drop-shadow-[0_20px_120px_rgba(0,0,0,0.4)]
            group-hover:scale-105
            transition-all duration-300">
            {title}
          </h3>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-white/20 rounded-bl-2xl"></div>
      </div>
      
      {/* Content Section */}
      <div className="relative p-6 sm:p-8">
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Bottom accent line - Fixed at card bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-2xl`}></div>
    </motion.div>
  );
};

export default MarketValueCard;

