import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                <span className="text-blue-400">Z</span>aid Al-Jumaili
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Electrical, Electronics & Robotics Engineer specializing in AI-driven automation, 
                robotic systems, and interactive technology for global events.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/zaidaljumaili" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="text-gray-400 hover:text-blue-400" size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors">
                  <Github className="text-gray-400 hover:text-blue-400" size={20} />
                </a>
                <a href="mailto:aljumailizaid@gmail.com" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors">
                  <Mail className="text-gray-400 hover:text-blue-400" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Research & Publications</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Speech Analysis & ML</span></li>
                <li><span className="text-gray-300">Reinforcement Learning</span></li>
                <li><span className="text-gray-300">Upper Limb Rehabilitation</span></li>
                <li><span className="text-gray-300">Actor-Critic Networks</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-300 text-sm flex items-center">
              Made with <Heart className="text-red-400 mx-1" size={16} /> by Zaid Al-Jumaili
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <p className="text-gray-300 text-sm">
                © 2024 Zaid Al-Jumaili. All rights reserved.
              </p>
              <button 
                onClick={scrollToTop}
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors"
              >
                <ArrowUp className="text-gray-400 hover:text-blue-400" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;