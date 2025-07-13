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
                    <source src="/public-assets/herobg_2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black bg-opacity-65" />
            </div>

            {/* Content */}
            <div className="z-10 px-4 sm:px-6 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
                {/* Tech Icons */}
                <div className="flex justify-center mb-6 sm:mb-8 space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full">
                        <Cpu className="text-blue-400" size={20} />
                    </div>
                    <div className="p-2 sm:p-3 bg-purple-500/20 rounded-full">
                        <Zap className="text-purple-400" size={20} />
                    </div>
                    <div className="p-2 sm:p-3 bg-cyan-500/20 rounded-full">
                        <Code className="text-cyan-400" size={20} />
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                    <span className="block">Zaid Al-Jumaili</span>
                    <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mt-2">
                        Electrical, Electronics & Robotics Engineer
                    </span>
                </h1>

                {/* Subtitle */}
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 font-semibold drop-shadow-md">
                    <span className="block">Creative Technologist</span>
                    <span className="block text-sm sm:text-base lg:text-lg mt-2 text-gray-200 max-w-2xl mx-auto font-normal">
                        Bridging circuits, code, and creativity. I build intelligent systems that connect, move, and amaze.
                    </span>
                </div>


                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
                    <button
                        onClick={scrollToAbout}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base font-medium"
                    >
                        Explore My Work
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 text-sm sm:text-base font-medium"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce z-10"
            >
                <ChevronDown size={28} className="sm:w-8 sm:h-8" />
            </button>
        </section>
    );
};

export default Hero;
