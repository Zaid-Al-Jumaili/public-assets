import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {/* Brand & Description */}
                        <div className="sm:col-span-2">
                            <div className="text-2xl sm:text-3xl text-white mb-4" style={{ fontFamily: 'Mrs Saint Delafield, cursive' }}>
                                <span className="text-blue-400">Z</span>aid Al-Jumaili
                            </div>
                            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                                Electrical, Electronics & Robotics Engineer specializing in AI-driven automation,
                                robotic systems, and interactive technology for global events.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/zaidaljumaili" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors">
                                    <Linkedin className="text-gray-400 hover:text-blue-400" size={18} />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors">
                                    <Github className="text-gray-400 hover:text-blue-400" size={18} />
                                </a>
                                <a href="mailto:aljumailizaid@gmail.com" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors">
                                    <Mail className="text-gray-400 hover:text-blue-400" size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">About</a></li>
                                <li><a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Skills</a></li>
                                <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Projects</a></li>
                                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Contact</a></li>
                            </ul>
                        </div>

                        {/* Research & Publications */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Research & Publications</h3>
                            <ul className="space-y-2">
                                <li><span className="text-gray-300 text-sm sm:text-base">Speech Analysis & ML</span></li>
                                <li><span className="text-gray-300 text-sm sm:text-base">Reinforcement Learning</span></li>
                                <li><span className="text-gray-300 text-sm sm:text-base">Upper Limb Rehabilitation</span></li>
                                <li><span className="text-gray-300 text-sm sm:text-base">Actor-Critic Networks</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                        <p className="text-gray-300 text-sm flex items-center">
                            Made with <Heart className="text-red-400 mx-1" size={16} /> by Zaid Al-Jumaili
                        </p>
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                            <p className="text-gray-300 text-sm text-center">
                                © 2024 Zaid Al-Jumaili. All rights reserved.
                            </p>
                            <button
                                onClick={scrollToTop}
                                className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors"
                            >
                                <ArrowUp className="text-gray-400 hover:text-blue-400" size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;