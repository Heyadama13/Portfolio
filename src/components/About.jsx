import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 'Tailwind CSS',
    'MongoDB', 'Git', 'WordPress', 'Data Analysis'
  ];

  return (
    <section id="about" className="py-20 bg-[#FFF7F2] text-[#4A4A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#F4B6A6]">About Me</h2>
          <p className="text-[#CFCFCF] text-lg">Get to know me better</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#E89B8C]">I'm a Full Stack Developer</h3>
            <p className="text-[#4A4A4A] leading-relaxed">
              With over 2 years of experience in web development. I specialize in creating robust and scalable applications. I'm passionate about clean code, user experience, and staying up-to-date with the latest technologies. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#E89B8C]">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md border border-[#F4B6A6]">
                  <span className="text-[#F4B6A6] font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
