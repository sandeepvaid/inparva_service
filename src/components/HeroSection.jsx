import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = [
    'AI-driven recruitment',
    'Intelligent VA services.',
    'Data-driven Insights.',
    'Future-ready solutions.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    // Scroll to enquiry form when implemented
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Growth doesn't wait.{' '}
              <span className="text-primary">Neither do we.</span>
            </h1>
            
            {/* Subheader with rotating text */}
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              <span>Inprava helps businesses scale with</span>
              <div className="h-12 sm:h-14 md:h-16 mt-2 relative overflow-hidden">
                {rotatingTexts.map((text, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                      index === currentTextIndex
                        ? 'translate-y-0 opacity-100'
                        : index < currentTextIndex
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-full opacity-0'
                    }`}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Inprava delivers end-to-end business solutions with 24/7 support, helping companies hire smarter, streamline operations, and scale with confidence.
            </p>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleGetStarted}
                className="bg-primary hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Get Started Now
              </button>
            </div>

            {/* Key Stats */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Clients Served</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image with Floating Keywords */}
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-[300px] sm:max-w-md lg:max-w-lg h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
              {/* Circular Orbits Background */}
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
                {/* Orbit 1 - Smallest */}
                <div className="absolute w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px] rounded-full border-2 border-primary/20 animate-spin-slow"></div>
                
                {/* Orbit 2 - Medium */}
                <div className="absolute w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] rounded-full border-2 border-blue-400/15 animate-spin-slower"></div>
                
                {/* Orbit 3 - Largest */}
                <div className="absolute w-[420px] sm:w-[550px] md:w-[600px] h-[420px] sm:h-[550px] md:h-[600px] rounded-full border-2 border-primary/10 animate-spin-slowest"></div>
                
                {/* Orbit Dots */}
                <div className="absolute w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px] animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full"></div>
                </div>
                <div className="absolute w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] animate-spin-slower">
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-blue-500 rounded-full"></div>
                </div>
                <div className="absolute w-[420px] sm:w-[550px] md:w-[600px] h-[420px] sm:h-[550px] md:h-[600px] animate-spin-slowest">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/60 rounded-full"></div>
                </div>
              </div>

              {/* Main Hero Image */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="https://www.cynetsystems.com/wp-content/uploads/2024/10/new-home-img-759x1024.webp"
                  alt="AI Technology Solutions"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating Keyword Badges */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Top Left */}
                <div className="absolute top-4 sm:top-8 left-0 bg-white rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg 
                  animate-float border-2 border-primary/20">
                  <span className="text-xs sm:text-sm font-semibold text-primary">AI Powered</span>
                </div>

                {/* Top Right */}
                <div className="absolute top-8 sm:top-16 right-0 bg-gradient-to-r from-primary to-blue-600 
                  rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg animate-float-delayed">
                  <span className="text-xs sm:text-sm font-semibold text-white">Hiring solutions</span>
                </div>

                {/* Middle Left */}
                <div className="absolute top-1/3 -left-2 sm:-left-4 bg-white rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg 
                  animate-float border-2 border-blue-500/20">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Cloud Solutions</span>
                </div>

                {/* Middle Right */}
                <div className="absolute top-1/3 -right-2 sm:-right-4 bg-gradient-to-r from-blue-500 to-primary 
                  rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg animate-float-delayed">
                  <span className="text-xs sm:text-sm font-semibold text-white">Data Analytics</span>
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-24 sm:bottom-32 left-2 sm:left-4 bg-white rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg 
                  animate-float border-2 border-primary/20">
                  <span className="text-xs sm:text-sm font-semibold text-primary">Automation</span>
                </div>

                {/* Bottom Right */}
                <div className="absolute bottom-16 sm:bottom-24 right-0 bg-gradient-to-r from-primary to-blue-600 
                  rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg animate-float-delayed">
                  <span className="text-xs sm:text-sm font-semibold text-white">Innovation</span>
                </div>

                {/* Extra Keywords - Hidden on Mobile */}
                <div className="hidden sm:block absolute bottom-36 md:bottom-48 left-4 md:left-8 bg-white rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-lg 
                  animate-float border-2 border-blue-500/20">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Digital Transform</span>
                </div>

                <div className="hidden sm:block absolute top-1/2 right-4 md:right-8 bg-gradient-to-r from-blue-500 to-primary 
                  rounded-full px-2 md:px-3 py-1 md:py-1.5 shadow-lg animate-float">
                  <span className="text-xs font-semibold text-white">Smart Tech</span>
                </div>
              </div>

              {/* Background Glow Effects */}
              <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full blur-2xl sm:blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-28 sm:w-40 h-28 sm:h-40 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

