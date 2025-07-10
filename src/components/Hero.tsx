import React from 'react';
import { ChevronDown, Cpu, Zap, Code } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden text-center text-white">
            {/* Video background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                >
                    <source src="https://robotic-portfolio.web.app/robotic-arm.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-60" /> {/* Optional dark overlay */}
            </div>

            {/* Content */}
            <div className="z-10 px-6 max-w-4xl">
                <div className="flex justify-center mb-8 space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-full">
                        <Cpu className="text-blue-400" size={24} />
                    </div>
                    <div className="p-3 bg-purple-500/20 rounded-full">
                        <Zap className="text-purple-400" size={24} />
                    </div>
                    <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Code className="text-cyan-400" size={24} />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="block">Zaid Al-Jumaili</span>
                    <span className="block text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                        Electrical, Electronics & Robotics Engineer
                    </span>
                </h1>

                <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                    <span className="block">Creative Technologist</span>
                    <span className="block text-lg mt-2 text-gray-400">
                        Innovative engineer with expertise in AI-driven automation, robotic systems, and interactive technology
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button
                        onClick={scrollToAbout}
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        Explore My Work
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            {/* Scroll icon */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce z-10"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};

export default Hero;
