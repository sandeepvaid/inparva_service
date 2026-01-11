// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import CounterCard from '../components/CounterCard';
import InfiniteMovingCards from '../components/InfiniteMovingCards';

const ClientsSection = () => {
  const [showAllClients, setShowAllClients] = useState(false);

  // Client company logos
  const clientLogos = [
    { name: 'Google', logo: '/src/assets/client_bg/google.png' },
    { name: 'Microsoft', logo: '/src/assets/client_bg/microsoft.png' },
    { name: 'Apple', logo: '/src/assets/client_bg/apple.png' },
    { name: 'Amazon', logo: '/src/assets/client_bg/Amazon.png' },
    { name: 'Adobe', logo: '/src/assets/client_bg/Adobe.png' },
    { name: 'Cisco', logo: '/src/assets/client_bg/Cisco.png' },
    { name: 'Dell', logo: '/src/assets/client_bg/Dell.png' },
    { name: 'Intel', logo: '/src/assets/client_bg/Amd.png' },
    { name: 'Walmart', logo: '/src/assets/client_bg/walmart.png' },
    { name: 'Ford', logo: '/src/assets/client_bg/ford.png' },
    { name: 'Boeing', logo: '/src/assets/client_bg/Boeing.png' },
    { name: 'JP Morgan', logo: '/src/assets/client_bg/JP_Morgan_Chase.png' },
    { name: 'Bank of America', logo: '/src/assets/client_bg/bank-of-america.png' },
    { name: 'Wells Fargo', logo: '/src/assets/client_bg/Wells_fargo.png' },
    { name: 'Citibank', logo: '/src/assets/client_bg/Citibank.png' },
    { name: 'American Express', logo: '/src/assets/client_bg/American_Express.png' },
    { name: 'Capital One', logo: '/src/assets/client_bg/Capital_One.png' },
    { name: 'Morgan Stanley', logo: '/src/assets/client_bg/Morgan_Stanley.png' },
    { name: 'PNC Bank', logo: '/src/assets/client_bg/PNC_Bank.png' },
    { name: 'Johnson & Johnson', logo: '/src/assets/client_bg/Johnson_Johnson.png' },
    { name: 'Pfizer', logo: '/src/assets/client_bg/Pfizer.png' },
    { name: 'UnitedHealth', logo: '/src/assets/client_bg/UnitedHealth.png' },
    { name: 'CVS Health', logo: '/src/assets/client_bg/CVS_Health.png' },
    { name: 'McKesson', logo: '/src/assets/client_bg/McKesson.png' },
    { name: 'Kaiser Permanente', logo: '/src/assets/client_bg/Kaiser_Permanente.png' },
    { name: 'Cigna', logo: '/src/assets/client_bg/Cigna.png' },
    { name: 'Humana', logo: '/src/assets/client_bg/Humana.png' },
    { name: 'Cardinal Health', logo: '/src/assets/client_bg/Cardinal_Health.png' },
    { name: 'Medtronic', logo: '/src/assets/client_bg/Medtronic.png' },
    { name: 'Elevance Health', logo: '/src/assets/client_bg/Elevance_Health.png' },
    { name: 'Delta', logo: '/src/assets/client_bg/Delta_air_lines.png' },
    { name: 'American Airlines', logo: '/src/assets/client_bg/American_Airlines.png' },
    { name: 'United Airlines', logo: '/src/assets/client_bg/United_airline.png' },
    { name: 'Southwest', logo: '/src/assets/client_bg/southwest-airlines.png' },
    { name: 'Marriott', logo: '/src/assets/client_bg/Marriott.png' },
    { name: 'Hilton', logo: '/src/assets/client_bg/hilton.png' },
    { name: 'Hyatt', logo: '/src/assets/client_bg/Hyatt.png' },
    { name: 'Four Seasons', logo: '/src/assets/client_bg/Four_Seasons.png' },
    { name: 'Best Buy', logo: '/src/assets/client_bg/Best_Buy.png' },
    { name: 'Home Depot', logo: '/src/assets/client_bg/Home_depot.png' },
    { name: 'GameStop', logo: '/src/assets/client_bg/GameStop.png' },
    { name: 'CarMax', logo: '/src/assets/client_bg/CarMax.png' },
    { name: 'PepsiCo', logo: '/src/assets/client_bg/Pepsi.png' },
    { name: '3M', logo: '/src/assets/client_bg/3m.png' },
    { name: 'PwC', logo: '/src/assets/client_bg/PwC.png' },
    { name: 'Disney', logo: '/src/assets/client_bg/The_Walt_Disney.png' },
    { name: 'AT&T', logo: '/src/assets/client_bg/Att.png' },
    { name: 'Qualcomm', logo: '/src/assets/client_bg/Qualcomm.png' },
    { name: 'HPE', logo: '/src/assets/client_bg/HPE.png' },
    { name: 'DXC', logo: '/src/assets/client_bg/DXC.png' },
    { name: 'Sony', logo: '/src/assets/client_bg/Sony.png' },
    { name: 'Panasonic', logo: '/src/assets/client_bg/Panasonic.png' },
    { name: 'CBRE', logo: '/src/assets/client_bg/CBRE.png' },
    { name: 'Greystar', logo: '/src/assets/client_bg/Greystar.png' },
    { name: 'Estee Lauder', logo: '/src/assets/client_bg/Estee_Lauder.png' },
    { name: 'American Heart Association', logo: '/src/assets/client_bg/American_Heart_Association.png' },
    { name: 'Christus', logo: '/src/assets/client_bg/christus.png' },
    { name: 'Medecision', logo: '/src/assets/client_bg/Medecision.png' },
    { name: 'MoneyGram', logo: '/src/assets/client_bg/money-gram.png' },
    { name: 'Ameriprise', logo: '/src/assets/client_bg/Ameriprise.png' },
    { name: 'Bank of NY Mellon', logo: '/src/assets/client_bg/Bank-of-New-York-Mellon.png' }
  ];

  const clients = [
    {
      icon: '🏦',
      name: 'BFSI',
      description: 'Banking, finance, and insurance services'
    },
    {
      icon: '🛠️',
      name: 'Engineering',
      description: 'Design, construction, and infrastructure'
    },
    {
      icon: '🏥',
      name: 'Healthcare',
      description: 'Medical, clinical, and life sciences'
    },
    {
      icon: '🏨',
      name: 'Hospitality',
      description: 'Travel, tourism, and guest services'
    },
    {
      icon: '💻',
      name: 'IT',
      description: 'Software, cloud, and digital services'
    },
    {
      icon: '🏭',
      name: 'Manufacturing',
      description: 'Production, automation, and operations'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Where We <span className="text-primary">Delivered the Right Hires</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by hundreds of businesses worldwide to deliver exceptional results
          </p>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Moving Carousel - Only show when not expanded */}
          {!showAllClients && (
            <>
              {/* Moving Carousel - First Row */}
              <div className="relative overflow-hidden py-8 mb-4">
                <div className="flex animate-scroll gap-8 items-center">
                  {/* Duplicate logos for seamless loop */}
                  {[...clientLogos.slice(0, 12), ...clientLogos.slice(0, 12)].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex items-center justify-center border border-gray-100"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Moving Carousel - Second Row (Reverse) */}
              <div className="relative overflow-hidden py-8 mb-8">
                <div className="flex animate-scroll gap-8 items-center" style={{ animationDirection: 'reverse' }}>
                  {/* Duplicate logos for seamless loop */}
                  {[...clientLogos.slice(12, 24), ...clientLogos.slice(12, 24)].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex items-center justify-center border border-gray-100"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Expanded Grid View - Show all logos */}
          {showAllClients && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8"
            >
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex items-center justify-center border border-gray-100 h-24"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Show More/Less Button - Always at the bottom */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllClients(!showAllClients)}
              className="bg-primary hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {showAllClients ? 'Show Less' : 'Show More Clients'}
            </button>
          </div>
        </motion.div>

        {/* Infinite Moving Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Delivery across <span className="text-primary">Industries</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          {/* First row - moving left */}
          <InfiniteMovingCards items={clients} direction="left" speed="normal" />
          
          {/* Second row - moving right */}
          <InfiniteMovingCards items={clients} direction="right" speed="normal" />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;

