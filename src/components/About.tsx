import React from 'react';
import { BrainCircuit, Lightbulb, Target, Globe } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: BrainCircuit,
            title: "AI in Action",
            description: "Real-time, responsive systems powered by machine intelligence"
        },
        {
            icon: Lightbulb,
            title: "Creative Problem Solving",
            description: "Turning ambitious ideas into elegant, working systems"
        },
        {
            icon: Target,
            title: "Precision + Performance",
            description: "Engineering solutions that are both reliable and show-ready"
        },
        {
            icon: Globe,
            title: "Impact at Scale",
            description: "Robots, systems, and installations seen by thousands"
        }
    ];

    return (
        <section id="about" className="min-h-screen flex items-center bg-gray-900 py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Compact Section Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                            About <span className="text-blue-400">Me</span>
                        </h2>
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Specializing in smart systems, real-time automation, and human-centered technology. from advanced circuits to AI-driven machines.
                        </p>
                    </div>

                    {/* Main Content - Compact Grid */}
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
                        {/* Text Content - Takes 2 columns on large screens */}
                        <div className="lg:col-span-2 space-y-4 sm:space-y-5">
                            <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/30">
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                    I make technology feel alive.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                    Whether its a robot dancing in sync with a live musician or a real-time system that reacts to a cheering crowd, I build experiences that blend engineering with storytelling.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                                    My work lives in that rare space between hardware, code, and emotion. From massive kinetic installations to AI-powered games and immersive robotic shows.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    I dont just design systems that function. I design systems that <strong>perform</strong>, <strong>connect</strong>, and <strong>leave a mark</strong>.
                                </p>
                            </div>
                        </div>


                        {/* Compact Stats Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-gray-700/50 h-full">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center">Key Metrics</h3>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">3+</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Years of Real-World Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">20+</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Projects Brought to Life</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">10+</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Robots Deployed in Activations</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">25+</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Live Events & Installations Delivered</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compact Highlights Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="bg-gray-800/40 rounded-xl p-4 sm:p-5 hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 border border-gray-700/30">
                                <div className="p-2 bg-blue-500/20 rounded-full w-fit mb-3">
                                    <item.icon className="text-blue-400" size={18} />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;