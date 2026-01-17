import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const navigate = useNavigate();

  const services = [
    { name: 'AI-Driven Recruitment & Staffing', href: '/recruitment' },
    { name: 'Virtual Assistant Services', href: '/virtual-assistant' },
    { name: 'Data Analytics & Insights', href: '/data-analytics' },
    { name: 'Software Development Solutions', href: '/software-development' },
  ];

  const handleServiceClick = (href) => {
    navigate(href);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServicesMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing
    setCloseTimeout(timeout);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center">
            <div className="text-xl md:text-4xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-primary">Inprava</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-14">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-bold text-lg"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors duration-200 font-bold text-lg py-2"
              >
                Services
                <HiChevronDown className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => handleServiceClick(service.href)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        <span className="text-base font-semibold">{service.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/schedule-call"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-bold text-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                onClick={handleHomeClick}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-bold text-lg"
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors duration-200 font-bold text-lg"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <HiChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => handleServiceClick(service.href)}
                        className="w-full text-left text-gray-600 hover:text-primary transition-colors duration-200 py-2 font-semibold"
                      >
                        <span className="text-base">{service.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/schedule-call"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-bold text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

