// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const RecruitmentPage = () => {

  const services = [
    {
      icon: '👥',
      title: 'Workforce Planning',
      description: 'Role alignment and strategic talent planning'
    },
    {
      icon: '🔍',
      title: 'Talent Sourcing',
      description: 'Pipeline building and candidate discovery'
    },
    {
      icon: '🤖',
      title: 'AI-Assisted Screening',
      description: 'Smart candidate shortlisting and evaluation'
    },
    {
      icon: '📅',
      title: 'Interview Coordination',
      description: 'Candidate management and scheduling'
    },
    {
      icon: '📝',
      title: 'Offer Management',
      description: 'Hiring support and negotiation assistance'
    },
    {
      icon: '🎯',
      title: 'Onboarding Support',
      description: 'Seamless new hire integration'
    }
  ];

  const benefits = [
    'Dedicated recruitment teams aligned to your roles and culture',
    'AI-driven sourcing & screening to reduce time-to-hire',
    'Flexible Recruitment models (project-based, hybrid, or full-cycle)',
    'Global talent access without geographic limitations',
    'Transparent reporting & KPIs you can actually use',
    '24/7 support for fast-moving hiring needs'
  ];

  const processSteps = [
    { icon: '🎯', title: 'Sourcing', description: 'We take two submissions per job requirement' },
    { icon: '🔎', title: 'Screening', description: 'Rigorous screening for each submission' },
    { icon: '📋', title: 'Shortlisting', description: 'Submission to shortlist ratio is 4:3.5' },
    { icon: '🎤', title: 'Interview', description: 'Only one in four submissions are taken in interviews' },
    { icon: '✅', title: 'Placement', description: 'Our interview to hire ratio is 3:1; landmark figure in the industry' },
    { icon: '🔄', title: 'Redeployment', description: 'One out of five hires through us tends to be redeployed' }
  ];

  const handleScheduleCall = () => {
    window.location.href = 'tel:+1234567890';
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Large animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-40 right-32 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-32 w-56 h-56 bg-gradient-to-tr from-cyan-400/15 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '2s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}></div>
        
        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(24,119,242,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600">
                Enterprise-Grade
              </span>{' '}
              Recruitment Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Inprava's recruitment services deliver end-to-end talent acquisition with speed, consistency, and measurable outcomes—so you can stay focused on growing your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ☎️ &nbsp;  Schedule a Hiring Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for <span className="text-primary">Growing Teams</span> and Modern Businesses
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our RPO Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-primary">Modular Recruitment Services</span>
            </h2>
            <p className="text-xl text-gray-600">End-to-End or Modular — You Choose</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Recruitment Process</span>
            </h2>
            <p className="text-lg text-gray-600">A proven 6-step journey to successful placements</p>
          </motion.div>

          <div className="relative py-8">
            {/* Horizontal Dotted Line connecting all steps - Desktop - Goes through center of circles */}
            <div className="hidden lg:block absolute left-0 right-0" style={{ top: 'calc(2rem + 48px)', zIndex: 5 }}>
              <div className="max-w-full mx-auto px-12">
                <div className="border-t-4 border-dotted border-gray-400"></div>
              </div>
            </div>

            {/* Process Steps - Horizontal Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 relative" style={{ zIndex: 10 }}>
              {processSteps.map((step, index) => {
                const colors = [
                  { bg: 'bg-green-100', border: 'border-green-200', icon: 'text-green-700' },
                  { bg: 'bg-blue-100', border: 'border-blue-200', icon: 'text-blue-700' },
                  { bg: 'bg-orange-100', border: 'border-orange-200', icon: 'text-orange-700' },
                  { bg: 'bg-amber-100', border: 'border-amber-200', icon: 'text-amber-700' },
                  { bg: 'bg-teal-100', border: 'border-teal-200', icon: 'text-teal-700' },
                  { bg: 'bg-gray-200', border: 'border-gray-300', icon: 'text-gray-700' }
                ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex flex-col items-center text-center cursor-pointer"
                  >
                    <motion.div 
                      className="relative z-20 mb-6"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4, ease: "easeInOut" }
                      }}
                    >
                      <div className={`w-24 h-24 ${colors[index].bg} rounded-full flex items-center justify-center shadow-md hover:shadow-xl border-4 border-white ${colors[index].border} transition-shadow duration-300`}>
                        <span className={`text-4xl ${colors[index].icon}`}>{step.icon}</span>
                      </div>
                    </motion.div>
                    <h3 className="font-bold text-base text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-[180px]">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Inprava */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Right Gradient Circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-white/20 via-blue-400/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Bottom Left Gradient Circle */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-300/20 via-white/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Center Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/10 via-transparent to-transparent rounded-full blur-3xl"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 rounded-lg rotate-12"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white/10 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 border-2 border-white/10 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-white/10 rounded-full"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="why-inprava-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgb(255, 255, 255)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#why-inprava-grid)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Inprava?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Inprava goes beyond filling roles—we design and deliver scalable recruitment solutions that align with your business goals. Our approach is collaborative, data-informed, and focused on building consistent, long-term hiring success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Build a Smarter <span className="text-primary">Hiring Engine?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your hiring goals and design an recruitment model that fits your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleCall}
                className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                📞 Schedule a Call
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentPage;

