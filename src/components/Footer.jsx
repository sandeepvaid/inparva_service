import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Schedule a Call', href: '/schedule-call' },
    { name: 'Contact', href: '/#enquiry-form' },
  ];

  const services = [
    { name: 'AI-Driven Recruitment & Staffing', href: '/recruitment' },
    { name: 'Virtual Assistant Services', href: '/virtual-assistant' },
    { name: 'Data Analytics & Insights', href: '/data-analytics' },
    { name: 'Software Development Solutions', href: '/software-development' },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/inprava', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/inprava', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <Link to="/">
                <h2 className="text-2xl font-bold text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  Inprava
              </h2>
              </Link>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with AI-driven recruitment, virtual assistant services, data analytics, 
              and software development solutions to drive growth and operational excellence.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                    transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg group`}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 
                      text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-200 
                        text-sm flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 
                      text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <HiPhone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <HiMail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:contact@inprava.com" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                  contact@inprava.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} <span className="text-primary font-semibold">Inprava</span>. All rights reserved.
            </p>

            {/* Crafted By */}
            <p className="text-gray-500 text-sm">
              Designed & Developed by{' '}
              <a 
                href="https://www.linkedin.com/in/sandeep-vaid623/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-400 font-semibold transition-colors duration-200"
              >
                Sandeep
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

