import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS.',
      icon: '🌐'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and databases like MongoDB and PostgreSQL.',
      icon: '⚙️'
    },
    {
      title: 'WordPress Development',
      description: 'Building and customizing WordPress websites, themes, and plugins for your business needs.',
      icon: '📝'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
      icon: '🎨'
    },
    {
      title: 'Social Media Management',
      description: 'Managing and growing your social media presence with engaging content and strategic planning.',
      icon: '📱'
    },
    {
      title: 'Maintenance',
      description: 'Ongoing support and maintenance for existing applications to keep them running smoothly.',
      icon: '🔧'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white text-[#4A4A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#F4B6A6]">Services</h2>
          <p className="text-[#CFCFCF] text-lg">What I can do for you</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#FFF7F2] rounded-lg p-6 hover:shadow-lg transition duration-300 border border-[#F4B6A6]">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#E89B8C]">{service.title}</h3>
              <p className="text-[#4A4A4A]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
