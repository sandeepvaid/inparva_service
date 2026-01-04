// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import MarketValueCard from '../components/MarketValueCard';

const Section1Page = () => {
  const cardsData = [
    {
      icon: '🎯',
      title: 'Best-in-Class Solutions',
      description: 'At Cynet Systems, we provide best-in-class staffing services tailored to meet your unique needs. Our commitment to excellence ensures that your organization has access to top talent, driving success and maintaining a competitive edge in today\'s dynamic market.'
    },
    {
      icon: '🚀',
      title: 'Innovation-Driven Approach',
      description: 'We leverage cutting-edge AI technology and innovative solutions to transform your business processes. Our team stays ahead of industry trends to deliver modern, efficient, and scalable solutions that propel your organization forward.'
    },
    {
      icon: '💼',
      title: 'Expert Talent Acquisition',
      description: 'Our comprehensive recruitment services connect you with top-tier professionals who align with your company culture and goals. We use advanced screening processes and industry expertise to ensure the perfect match for your organization.'
    },
    {
      icon: '🌟',
      title: 'Proven Track Record',
      description: 'With over a decade of experience and 500+ satisfied clients, we have consistently delivered exceptional results. Our proven methodologies and dedication to client success make us the trusted partner for businesses worldwide.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/15 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-32 w-80 h-80 bg-gradient-to-tl from-indigo-400/15 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-2xl"></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-56 h-56 bg-indigo-500/5 rounded-full blur-xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        
        {/* Radial gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.06),transparent_50%)]"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Delivering excellence through innovation, expertise, and unwavering commitment to your success
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {cardsData.map((card, index) => (
            <MarketValueCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1Page;

