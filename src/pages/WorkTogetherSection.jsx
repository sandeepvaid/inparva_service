// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '../components/BackgroundBeams';

const WorkTogetherSection = () => {
  const handleScrollToForm = () => {
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <BackgroundBeamsWithCollision className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-blue-600 to-blue-700">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Large Floating Gradient Orbs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl"
          animate={{
            y: [0, 80, 0],
            x: [0, 50, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-40 w-[420px] h-[420px] bg-gradient-to-br from-pink-300/35 to-rose-400/35 rounded-full blur-3xl"
          animate={{
            y: [0, -70, 0],
            x: [0, -60, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-300/35 to-teal-400/35 rounded-full blur-3xl"
          animate={{
            y: [0, -60, 0],
            x: [0, 70, 0],
            scale: [1, 1.45, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-purple-300/30 to-indigo-400/30 rounded-full blur-3xl"
          animate={{
            y: [0, 90, 0],
            x: [0, -50, 0],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* White Glow Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-white/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating Dots with Contrasting Colors */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full"
            style={{
              top: `${8 + i * 6}%`,
              left: `${5 + i * 6.5}%`,
              background: i % 4 === 0 
                ? 'rgba(253, 224, 71, 0.7)' 
                : i % 4 === 1 
                ? 'rgba(244, 114, 182, 0.7)' 
                : i % 4 === 2
                ? 'rgba(103, 232, 249, 0.7)'
                : 'rgba(255, 255, 255, 0.8)',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 5 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}

        {/* Pulsing Ripple Rings */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 border-4 border-yellow-300/40 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-40 h-40 border-4 border-pink-300/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.7
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-36 h-36 border-4 border-cyan-300/40 rounded-full"
          animate={{
            scale: [1, 1.9, 1],
            opacity: [0.45, 0, 0.45],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold 
              rounded-full border border-white/30">
              Ready to Transform Your Business?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Let's Work <span className="text-blue-100">Together</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-blue-50 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Partner with us to leverage cutting-edge AI technology and expert talent. 
            Let's create innovative solutions that drive your business forward and achieve 
            exceptional results together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleScrollToForm}
              className="group bg-white text-primary font-bold px-8 py-4 rounded-lg 
                hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 
                hover:shadow-2xl shadow-xl w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Get Started Now
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <a
              href="tel:+1234567890"
              className="group bg-transparent border-2 border-white text-white font-bold px-8 py-4 
                rounded-lg hover:bg-white hover:text-primary transition-all duration-300 
                transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </span>
            </a>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-blue-100">Support Available</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs sm:text-sm text-blue-100">Quality Assured</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Fast</div>
                <div className="text-xs sm:text-sm text-blue-100">Project Delivery</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Expert</div>
                <div className="text-xs sm:text-sm text-blue-100">Team Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default WorkTogetherSection;

