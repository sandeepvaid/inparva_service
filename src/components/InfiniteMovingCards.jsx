import { useEffect, useRef } from 'react';

const InfiniteMovingCards = ({ items, direction = 'left', speed = 'normal' }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollContent = Array.from(scroller.children);
    
    // Clone items for seamless loop
    scrollContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });

    // Set animation speed
    const speedMap = {
      slow: '60s',
      normal: '40s',
      fast: '20s'
    };
    
    scroller.style.setProperty('--animation-duration', speedMap[speed]);
    scroller.style.setProperty('--animation-direction', direction === 'left' ? 'forwards' : 'reverse');
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Scrolling content */}
      <div
        ref={scrollerRef}
        className="flex gap-6 w-max animate-scroll"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-xl p-6 shadow-md 
              hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Company Logo/Name */}
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl sm:text-4xl">{item.icon}</div>
            </div>
            
            {/* Company Name */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-2">
              {item.name}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-600 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;

