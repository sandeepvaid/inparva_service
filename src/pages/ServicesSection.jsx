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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-2xl"></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-xl"></div>
        
        {/* Gradient overlay mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]"></div>
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600">Services</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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

