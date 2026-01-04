// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SoftwareDevelopmentPage = () => {
  const navigate = useNavigate();
  const services = [
    { icon: '🌐', title: 'Web Applications', description: 'Basic to mid-level web app development' },
    { icon: '🛠️', title: 'Internal Tools', description: 'Custom business tools and dashboards' },
    { icon: '💻', title: 'Website Development', description: 'Professional websites and enhancements' },
    { icon: '🔗', title: 'API Integrations', description: 'Third-party tool connections and automation' },
    { icon: '🔧', title: 'App Maintenance', description: 'Ongoing support and bug fixes' },
    { icon: '⚡', title: 'Feature Enhancements', description: 'Improvements and optimizations' }
  ];

  const idealFor = [
    { 
      icon: '🚀', 
      title: 'Startups', 
      description: 'Building MVPs or internal tools on a budget'
    },
    { 
      icon: '💼', 
      title: 'Growing Businesses', 
      description: 'Need software enhancements without long-term commitments'
    },
    { 
      icon: '👥', 
      title: 'Teams', 
      description: 'Seeking development support without full-time hires'
    },
    { 
      icon: '🤝', 
      title: 'Existing Clients', 
      description: 'Already using Inprava\'s RPO or VA services'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'APIs', icon: '🔌' },
    { name: 'Databases', icon: '🗄️' },
    { name: 'Cloud', icon: '☁️' }
  ];

  const handleScheduleCall = () => {
    navigate('/schedule-call');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Software That Supports <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                Your Business Goals.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Inprava offers reliable software development support to help businesses build, improve, 
              and maintain digital solutions—without unnecessary complexity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              📞 Schedule a Call
            </motion.button>
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
              Our Software Development <span className="text-orange-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600">What We Can Help With</p>
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
                <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
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

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies <span className="text-orange-600">We Work With</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="font-semibold text-gray-900">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">Ideal For:</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {idealFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="text-6xl mb-6">💡</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Simple, Transparent, Effective
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              We focus on delivering practical software solutions that work—without the enterprise 
              overhead or unnecessary complexity.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-2">Clear Scope</h3>
                <p className="opacity-90">We define exactly what we'll build and when</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="font-bold text-xl mb-2">Fixed Pricing</h3>
                <p className="opacity-90">No surprise costs or hidden fees</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
                <p className="opacity-90">Agile approach with regular updates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-orange-600">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'Understand your needs and goals' },
              { num: '02', title: 'Planning', desc: 'Define scope, timeline, and costs' },
              { num: '03', title: 'Development', desc: 'Build with regular updates' },
              { num: '04', title: 'Delivery', desc: 'Launch and ongoing support' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-orange-100 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-3xl text-orange-300">→</div>
                )}
              </motion.div>
            ))}
          </div>
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
              Have a <span className="text-orange-600">Project in Mind?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your requirements and determine the right approach.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              📞 Schedule Your Development Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;

