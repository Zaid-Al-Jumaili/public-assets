import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
        >
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo - Responsive sizing */}
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white" style={{ fontFamily: 'Mrs Saint Delafield, cursive' }}>
                        <span className="text-blue-400">Z</span>aid Al-Jumaili
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-6 xl:space-x-8 mx-auto">
                        <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm xl:text-base">
                            About
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm xl:text-base">
                            Skills
                        </button>
                        <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm xl:text-base">
                            Projects
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm xl:text-base">
                            Contact
                        </button>
                    </nav>

                    {/* Desktop Social Icons */}
                    <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                        <a href="https://www.linkedin.com/in/zaidaljumaili" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors p-2">
                            <Linkedin size={18} className="xl:w-5 xl:h-5" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors p-2">
                            <Github size={18} className="xl:w-5 xl:h-5" />
                        </a>
                        <a href="mailto:aljumailizaid@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors p-2">
                            <Mail size={18} className="xl:w-5 xl:h-5" />
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 py-4 bg-gray-800/95 backdrop-blur-md rounded-lg border border-gray-700/50">
                        <nav className="flex flex-col space-y-4 px-4">
                            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 text-lg">
                                About
                            </button>
                            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 text-lg">
                                Skills
                            </button>
                            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 text-lg">
                                Projects
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 text-lg">
                                Contact
                            </button>

                            {/* Mobile Social Icons */}
                            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                                <a href="https://www.linkedin.com/in/zaidaljumaili" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors p-2">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors p-2">
                                    <Github size={20} />
                                </a>
                                <a href="mailto:aljumailizaid@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors p-2">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;