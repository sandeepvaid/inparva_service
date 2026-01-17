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
    { name: 'Java', icon: '☕' },
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
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced Multi-Layer Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] bg-gradient-to-tl from-blue-600/30 via-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-cyan-400/25 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5.5s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-blue-500/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '6.5s' }}></div>
        
        {/* Radial Gradient Mesh Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(24,119,242,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.10),transparent_50%)]"></div>

        {/* Animated gradient sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgb(24, 119, 242)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Diagonal light streaks */}
        <div className="absolute inset-0 transform rotate-45 opacity-10">
          <div className="absolute inset-y-0 left-1/4 w-1 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute inset-y-0 right-1/4 w-1 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '6s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Software That Supports <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
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
              className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ☎️ &nbsp; Schedule a Call
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
              Our Software Development <span className="text-primary">Capabilities</span>
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
                <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
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
              Technologies <span className="text-primary">We Work With</span>
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
                className="bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary"
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
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary">Ideal For:</span>
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
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-blue-600">
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
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-3xl text-blue-300">→</div>
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
              Have a <span className="text-primary">Project in Mind?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your requirements and determine the right approach.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ☎️ Schedule Your Development Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;

