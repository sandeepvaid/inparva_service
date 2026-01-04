// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RecruitmentPage = () => {
  const navigate = useNavigate();

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
    'Flexible RPO models (project-based, hybrid, or full-cycle)',
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
    navigate('/schedule-call');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Scalable Recruitment.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600">
                Predictable Hiring.
              </span>
              <br />Real Results.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Inprava's RPO services help you manage end-to-end recruitment with speed, consistency, 
              and measurable outcomes—so you can focus on growing your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              📞 Schedule a Hiring Strategy Call
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
              Our <span className="text-primary">RPO Services</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 transform -translate-y-1/2 opacity-20"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative z-10"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Inprava */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Inprava?
            </h2>
            <p className="text-2xl mb-6 opacity-90">More Than a Vendor. A Hiring Partner.</p>
            <p className="text-xl mb-10 opacity-80 leading-relaxed">
              Inprava doesn't just fill roles—we build hiring systems that scale with your business. 
              Our RPO approach is collaborative, data-driven, and focused on long-term success.
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
              Let's discuss your hiring goals and design an RPO model that fits your business.
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleCall}
                className="bg-white text-primary border-2 border-primary font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                💬 Talk to an RPO Expert
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentPage;

