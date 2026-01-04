// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CounterCard from '../components/CounterCard';
import InfiniteMovingCards from '../components/InfiniteMovingCards';

const ClientsSection = () => {
  const counters = [
    {
      end: 500,
      label: 'Clients Served',
      icon: '👥',
      suffix: '+'
    },
    {
      end: 1000,
      label: 'Projects Completed',
      icon: '🚀',
      suffix: '+'
    },
    {
      end: 10,
      label: 'Years of Experience',
      icon: '⭐',
      suffix: '+'
    },
    {
      end: 98,
      label: 'Client Satisfaction',
      icon: '💯',
      suffix: '%'
    }
  ];

  const clients = [
    {
      icon: '🏢',
      name: 'Tech Corp',
      description: 'Leading technology solutions provider'
    },
    {
      icon: '🏦',
      name: 'Finance Plus',
      description: 'Global financial services company'
    },
    {
      icon: '🏥',
      name: 'HealthCare Pro',
      description: 'Healthcare innovation leader'
    },
    {
      icon: '🎓',
      name: 'EduTech Solutions',
      description: 'Educational technology pioneer'
    },
    {
      icon: '🏭',
      name: 'Manufacturing Co',
      description: 'Industrial automation experts'
    },
    {
      icon: '🛒',
      name: 'Retail Giants',
      description: 'E-commerce and retail solutions'
    },
    {
      icon: '✈️',
      name: 'Travel Worldwide',
      description: 'Global travel and hospitality'
    },
    {
      icon: '🎨',
      name: 'Creative Agency',
      description: 'Design and marketing excellence'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Success</span> in Numbers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by hundreds of businesses worldwide to deliver exceptional results
          </p>
        </motion.div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {counters.map((counter, index) => (
            <CounterCard
              key={index}
              end={counter.end}
              label={counter.label}
              icon={counter.icon}
              suffix={counter.suffix}
            />
          ))}
        </div>

        {/* Infinite Moving Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Trusted by Industry Leaders
          </h3>
          
          {/* First row - moving left */}
          <InfiniteMovingCards items={clients} direction="left" speed="normal" />
          
          {/* Second row - moving right */}
          <InfiniteMovingCards items={clients} direction="right" speed="normal" />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;

