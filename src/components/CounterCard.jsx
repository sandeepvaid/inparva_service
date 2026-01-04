// eslint-disable-next-line no-unused-vars
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CounterCard = ({ end, duration = 2, label, icon, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const displayValue = useRef(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      displayValue.current = Math.round(latest);
      if (ref.current) {
        ref.current.textContent = displayValue.current + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg 
        hover:shadow-2xl transition-all duration-300 border border-gray-100
        transform hover:scale-105"
    >
      {/* Icon */}
      <div className="mb-4 text-5xl sm:text-6xl">
        {icon}
      </div>
      
      {/* Counter */}
      <div 
        ref={ref}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2"
      >
        0{suffix}
      </div>
      
      {/* Label */}
      <p className="text-base sm:text-lg text-gray-600 font-medium text-center">
        {label}
      </p>
    </motion.div>
  );
};

export default CounterCard;

