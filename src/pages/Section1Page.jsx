// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import MarketValueCard from '../components/MarketValueCard';

const Section1Page = () => {
  const cardsData = [
    {
      title: 'Cross-Domain Expertise',
      description: 'From Recruitment and Virtual Support to Data Analytics and Software Engineering, we bring together multidisciplinary expertise under one roof. This allows us to deliver seamlessly integrated solutions, reduce coordination overhead, and ensure every function works in alignment with your business goals.'
    },
    {
      title: 'Human Expertise, Powered by AI',
      description: 'We leverage AI tools to accelerate workflows, improve accuracy, and uncover insights—while keeping human judgment at the center. This balanced approach ensures efficiency without losing context, creativity, or decision-making quality.'
    },
    {
      title: 'Custom-Built for Your Business',
      description: 'We don\'t believe in off-the-shelf solutions. Every engagement is designed around your specific challenges, processes, and growth plans, ensuring outcomes that fit your business—not generic models.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Animated Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated gradient orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-primary/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-gradient-to-tl from-blue-600/20 via-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        
        {/* Medium floating orbs with movement */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        
        {/* Small accent orbs with different speeds */}
        <div className="absolute top-1/2 left-1/3 w-52 h-52 bg-blue-500/8 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-60 h-60 bg-blue-600/8 rounded-full blur-xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>
        
        {/* Radial gradient mesh with stronger effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(24,119,242,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(24,119,242,0.08),transparent_50%)]"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
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
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Inprava Advantage</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Why businesses choose Inprava for their growth journey
          </motion.p>
        </motion.div>

        {/* Cards Grid - Vertical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cardsData.map((card, index) => (
            <MarketValueCard
              key={index}
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

