import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const FloatingContactButtons = () => {
  const contacts = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      link: 'https://wa.me/1234567890', // Replace with actual number
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      icon: FaPhone,
      label: 'Call Us',
      link: 'tel:+1234567890', // Replace with actual number
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      link: 'mailto:contact@inprava.com', // Replace with actual email
      bgColor: 'bg-primary',
      hoverColor: 'hover:bg-blue-700',
    },
  ];

  return (
    <div className="fixed right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 sm:gap-3">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target={contact.icon === FaWhatsapp ? '_blank' : '_self'}
          rel={contact.icon === FaWhatsapp ? 'noopener noreferrer' : undefined}
          className={`group relative ${contact.bgColor} ${contact.hoverColor} 
            text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center 
            shadow-lg hover:shadow-xl transition-all duration-300 
            transform hover:scale-110 hover:-translate-x-1`}
          aria-label={contact.label}
        >
          {/* Icon */}
          <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Tooltip - Hidden on mobile, visible on desktop */}
          <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm 
            font-medium rounded-lg whitespace-nowrap opacity-0 invisible 
            group-hover:opacity-100 group-hover:visible transition-all duration-300
            shadow-lg pointer-events-none">
            {contact.label}
            {/* Arrow */}
            <span className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 
              bg-gray-900 rotate-45"></span>
          </span>
          
          {/* Ripple effect on hover */}
          <span className="absolute inset-0 rounded-full bg-white opacity-0 
            group-hover:opacity-20 transition-opacity duration-300"></span>
        </a>
      ))}
    </div>
  );
};

export default FloatingContactButtons;

