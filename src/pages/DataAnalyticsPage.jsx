// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DataAnalyticsPage = () => {
  const navigate = useNavigate();
  const services = [
    { icon: '📊', title: 'Data Collection & Integration', description: 'Seamless data aggregation from multiple sources' },
    { icon: '🧹', title: 'Data Cleaning & Preparation', description: 'Quality assurance and data standardization' },
    { icon: '📈', title: 'Business Intelligence & Reporting', description: 'Actionable insights from your data' },
    { icon: '📉', title: 'Custom Dashboards', description: 'Visual analytics aligned to your KPIs' },
    { icon: '🎯', title: 'Performance Tracking', description: 'Real-time KPI monitoring and alerts' },
    { icon: '🔮', title: 'Trend Analysis & Forecasting', description: 'Predictive insights for better planning' }
  ];

  const benefits = [
    { 
      icon: '💼', 
      title: 'Business-First Approach', 
      description: 'Analytics designed for decision-makers, not data scientists'
    },
    { 
      icon: '🎯', 
      title: 'Actionable Insights', 
      description: 'Clear recommendations, not overwhelming data dumps'
    },
    { 
      icon: '📊', 
      title: 'Custom Dashboards', 
      description: 'KPI tracking aligned to your business goals'
    },
    { 
      icon: '📈', 
      title: 'Scalable Solutions', 
      description: 'Analytics infrastructure that grows with your data'
    },
    { 
      icon: '🔗', 
      title: 'Seamless Integration', 
      description: 'Works with your existing tools and systems'
    },
    { 
      icon: '⏰', 
      title: '24/7 Support', 
      description: 'Ongoing optimization and technical assistance'
    }
  ];

  const handleScheduleCall = () => {
    navigate('/schedule-call');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Make Confident Decisions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                With Data You Can Trust.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Inprava helps businesses transform raw data into clear, actionable insights—so leaders 
              can move faster, reduce risk, and drive measurable growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              👉 Schedule a Call
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Value-Add Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <span className="text-3xl">🎁</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Added-Value Analytics for Our Partners
            </h2>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto opacity-90">
              Businesses using Inprava's RPO or Virtual Assistant services receive complimentary 
              data analytics support to help track performance, improve efficiency, and make informed 
              decisions—at no additional cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              End-to-End <span className="text-emerald-600">Analytics Support</span>
            </h2>
            <p className="text-xl text-gray-600">Our services include:</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Analytics Built for <span className="text-emerald-600">Decision-Makers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visualization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <div className="text-6xl mb-6">📊</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Turn Data Chaos Into Clear Direction
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Stop drowning in spreadsheets. Get dashboards that tell you what's working, what's not, 
              and what to do next.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">50%</div>
                <div className="text-sm opacity-90">Faster Reporting</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Data Accuracy</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Make <span className="text-emerald-600">Data-Driven Decisions?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can turn your data into your competitive advantage.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              📞 Schedule Your Analytics Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsPage;

