// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VirtualAssistantPage = () => {
  const navigate = useNavigate();

  const services = [
    { icon: '📧', title: 'Email Management', description: 'Inbox organization and response handling' },
    { icon: '📅', title: 'Calendar Management', description: 'Scheduling and appointment coordination' },
    { icon: '📊', title: 'Data Entry', description: 'Accurate data processing and management' },
    { icon: '🎨', title: 'Social Media', description: 'Content scheduling and community management' },
    { icon: '📝', title: 'Content Writing', description: 'Blog posts, articles, and documentation' },
    { icon: '🔍', title: 'Research', description: 'Market research and data gathering' },
    { icon: '💼', title: 'Admin Support', description: 'General administrative tasks' },
    { icon: '📞', title: 'Customer Support', description: 'Client communication and support' },
    { icon: '💰', title: 'Bookkeeping', description: 'Basic accounting and invoicing' },
    { icon: '🛒', title: 'E-commerce Support', description: 'Product listings and order management' },
    { icon: '🎯', title: 'Project Coordination', description: 'Task tracking and team coordination' },
    { icon: '📱', title: 'Digital Marketing', description: 'Campaign management and analytics' }
  ];

  const benefits = [
    'Dedicated VA assigned to your business',
    'Flexible engagement models (part-time / full-time)',
    'Quick onboarding & seamless integration',
    'Process-driven task execution',
    'Ongoing performance monitoring',
    '24/7 support availability'
  ];

  const handleScheduleCall = () => {
    navigate('/schedule-call');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Form */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Delegate Smarter.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-primary">
                  Operate Faster.
                </span>
                <br />Focus on What Matters.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Inprava provides dedicated, skilled virtual assistants who seamlessly support your 
                operations—so you can focus on growth, strategy, and results.
              </p>
              
              {/* Quick Benefits */}
              <div className="space-y-3">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Quick CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100 flex flex-col justify-center items-center text-center h-full"
            >
              <div className="text-7xl mb-6">📞</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Let's discuss how our virtual assistants can support your business operations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✓</span>
                  </div>
                  <span className="text-gray-700">Quick 15-minute consultation</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✓</span>
                  </div>
                  <span className="text-gray-700">Discuss your specific needs</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✓</span>
                  </div>
                  <span className="text-gray-700">Get started within 48 hours</span>
                </div>
              </div>
              <motion.button
                onClick={handleScheduleCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📅 Schedule Your Call Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VA Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Virtual Assistants</span> Can Do
            </h2>
            <p className="text-xl text-gray-600 italic">
              "Can Your Work Be Done With Just a Computer? If Yes, Then You Can Hire A VA"
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-purple-50 via-blue-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{service.title}</h3>
                <p className="text-xs text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for <span className="text-purple-600">Reliability</span>, Not Just Cost Savings
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
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how a dedicated virtual assistant can support your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-white text-purple-600 font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              📞 Schedule a Call
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VirtualAssistantPage;

