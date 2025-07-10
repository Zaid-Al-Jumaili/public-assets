import React from 'react';
import { Brain, Lightbulb, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems that learn and adapt"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Creating breakthrough solutions for complex problems"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Building robust, reliable robotic systems"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning projects and published research"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative Electrical & Robotics Engineer with expertise in AI-driven automation, robotic systems, 
              and interactive technology for global events and high-profile activations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Skilled in integrating AI with robotics (ROS, KUKA, xArm6, Unitree RoboDogs) and developing 
                real-time synchronized experiences for global events. My work includes everything from 
                AI-powered robotic artists to interactive LED systems that respond to crowd dynamics.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I hold a Bachelor's degree in Electrical and Electronics Engineering (Highest Honors, cGPA: 3.93) 
                from the University of Sharjah and have published research in machine learning & robotics. 
                My approach combines rigorous engineering principles with creative problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently working at Serotonin Technologies, I've led multidisciplinary teams to design 
                custom automation solutions for clients like DEWA, Cisco, Emirates NBD, and the KSA Ministry of Education.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
                    <div className="text-gray-300">Research Papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">3.93</div>
                    <div className="text-gray-300">cGPA (Highest Honors)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="p-3 bg-blue-500/20 rounded-full w-fit mb-4">
                  <item.icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;