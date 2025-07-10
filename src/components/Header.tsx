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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left - Logo */}
                    <div className="text-5xl text-white" style={{ fontFamily: 'Mrs Saint Delafield, cursive' }}>
                        <span className="text-blue-400">Z</span>aid Al-Jumaili
                    </div>



                    {/* Center - Navigation */}
                    <nav className="hidden md:flex space-x-8 mx-auto">
                        <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            About
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            Skills
                        </button>
                        <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            Projects
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
                            Contact
                        </button>
                    </nav>

                    {/* Right - Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://www.linkedin.com/in/zaidaljumaili" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="mailto:aljumailizaid@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg">
                        <nav className="flex flex-col space-y-4 px-4">
                            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                                About
                            </button>
                            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                                Skills
                            </button>
                            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                                Projects
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                                Contact
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
