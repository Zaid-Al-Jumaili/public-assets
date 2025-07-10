import React from 'react';
import { Code, Cpu, Database, Wrench, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Software",
      skills: ["Python", "C++", "Arduino", "MATLAB", "Simulink", "Verilog HDL", "Ladder Logic", "Linux"],
      color: "blue"
    },
    {
      icon: Brain,
      title: "Robotics & Automation",
      skills: ["ROS2", "KUKA KRL", "xArm6 SDK", "Unitree Go2 SDK", "Computer Vision", "AI-powered robotics"],
      color: "purple"
    },
    {
      icon: Cpu,
      title: "Embedded Systems & IoT",
      skills: ["Raspberry Pi", "ESP8266", "Controllino", "Arduino", "Real-time UDP/TCP", "PCB Design"],
      color: "cyan"
    },
    {
      icon: Database,
      title: "Simulation & Analysis",
      skills: ["PSpice", "LTspice", "MATLAB Simulations", "OpenCV", "Deep Learning Models"],
      color: "green"
    },
    {
      icon: Wrench,
      title: "Event Technology",
      skills: ["Kinetic Lighting (Madrix)", "VR Integration", "Motion Synchronization", "Interactive Systems"],
      color: "orange"
    },
    {
      icon: Zap,
      title: "Hardware & Electronics",
      skills: ["Circuit Troubleshooting", "Soldering", "Audio Processing", "Real-time Response Systems"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-400/30",
      purple: "from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-400/30",
      cyan: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-400/30",
      green: "from-green-500/20 to-green-600/20 text-green-400 border-green-400/30",
      orange: "from-orange-500/20 to-orange-600/20 text-orange-400 border-orange-400/30",
      pink: "from-pink-500/20 to-pink-600/20 text-pink-400 border-pink-400/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit spanning robotics, AI, and cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-br ${getColorClasses(category.color)} rounded-full mr-4`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={`px-4 py-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-lg border backdrop-blur-sm`}>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Advanced</div>
                <div className="text-gray-300">Autonomous Systems</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">Expert</div>
                <div className="text-gray-300">Machine Learning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Proficient</div>
                <div className="text-gray-300">Hardware Integration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;