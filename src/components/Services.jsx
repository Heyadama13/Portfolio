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
    <section id="services" className="py-20 bg-[#2D2D2D] text-[#F5E6E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#D4A5A5]">Services</h2>
          <p className="text-[#B8A9A9] text-lg">What I can do for you</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#3D3D3D] rounded-lg p-6 hover:shadow-lg hover:shadow-[#D4A5A5]/20 transition duration-300 border border-[#D4A5A5]/30">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#C48B8B]">{service.title}</h3>
              <p className="text-[#E8D8D8]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
