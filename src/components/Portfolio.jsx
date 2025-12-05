import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒',
      image: '/eccomerce.webp',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      icon: '✅',
      image: '/task_management.webp',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard using external APIs.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      icon: '🌤️',
      image: '/weather_dashboard.webp',
      link: '#'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with CMS capabilities.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      icon: '📝',
      image: '/blog.webp',
      link: '#'
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive hospital management system for managing patients, staff, and appointments.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      icon: '🏥',
      image: '/hospital.webp',
      link: 'https://hospitalmanagamentsystem.netlify.app/'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms.',
      technologies: ['Socket.io', 'Express', 'React'],
      icon: '💬',
      image: '/chat.webp',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#FFF7F2] text-[#4A4A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#F4B6A6]">Portfolio</h2>
          <p className="text-[#CFCFCF] text-lg">Some of my recent work</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden hover:scale-105 transition duration-300 shadow-md border border-[#F4B6A6]">
              <div className="h-48 bg-[#FFF7F2] flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl">{project.icon}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#E89B8C]">{project.title}</h3>
                <p className="text-[#4A4A4A] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#F4B6A6] text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#F4B6A6] hover:text-[#E89B8C] font-medium">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
