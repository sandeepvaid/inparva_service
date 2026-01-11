// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const ServicesSection = () => {
  const servicesData = [
    {
      icon: '🤖',
      title: 'AI-Driven Recruitment & Staffing',
      description: 'Hire the right talent without the delays, guesswork, or hiring risks. Inprava uses intelligent recruitment and staffing processes to deliver professionals who are aligned with your skills, culture, and business goals—so your teams perform from day one.',
      link: '/recruitment'
    },
    {
      icon: '💻',
      title: 'Virtual Assistant Services',
      description: 'Free your core team from operational overload. Our dedicated virtual assistants seamlessly integrate into your workflows, handling daily execution so your leaders can focus on strategy, growth, and results.',
      link: '/virtual-assistant'
    },
    {
      icon: '📊',
      title: 'Data Analytics & Insights',
      description: 'Stop making decisions in the dark. Inprava turns your business data into clear, actionable insights that help you identify opportunities, reduce inefficiencies, and move forward with confidence.',
      link: '/data-analytics'
    },
    {
      icon: '⚙️',
      title: 'Software Development Solutions',
      description: 'Build software that actually supports your growth. We design and develop scalable, future-ready solutions tailored to your business needs—so technology becomes an advantage, not a bottleneck.',
      link: '/software-development'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Multi-layered Background with Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="service-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(24, 119, 242)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-grid)" />
          </svg>
        </div>
        
        {/* Large gradient orbs - Primary color theme with stronger presence */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/25 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] bg-gradient-to-tl from-blue-600/25 via-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        
        {/* Medium floating orbs with movement */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 via-blue-400/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '2s' }}></div>
        
        {/* Additional layered orbs for depth */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-72 h-72 bg-gradient-to-tl from-blue-500/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6.5s', animationDelay: '0.3s' }}></div>
        
        {/* Radial gradient overlays - Stronger presence */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(24,119,242,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_60%)]"></div>
        
        {/* Animated gradient sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full blur-sm animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500/30 rounded-full blur-sm animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-indigo-500/30 rounded-full blur-sm animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
        
        {/* Diagonal light streaks */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-20 w-64 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/3 -right-20 w-72 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -rotate-45 blur-sm"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 relative">
                Services
                {/* Subtle glow effect behind text */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl -z-10"></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 mx-auto rounded-full shadow-lg shadow-primary/30"></div>
          </motion.div>
          
          <motion.p 
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Empowering your business with cutting-edge solutions designed to drive growth, efficiency, and success
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

