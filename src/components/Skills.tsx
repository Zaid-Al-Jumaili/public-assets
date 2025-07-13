import React from 'react';
import { Code2, Cable, Brain, Hammer, Move3D, Radar } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            icon: Code2,
            title: "Core Systems & Programming",
            skills: ["Python", "C++", "MATLAB / Simulink", "Arduino", "Ladder Logic"],
            color: "blue"
        },
        {
            icon: Move3D,
            title: "Robotics & Intelligent Control",
            skills: ["KUKA KRL", "ROS2", "xArm6 SDK", "Unitree Go2 SDK", "Computer Vision", "Motion Synchronization"],
            color: "purple"
        },
        {
            icon: Cable,
            title: "Embedded Systems & Connectivity",
            skills: ["Raspberry Pi", "ESP8266", "Controllino", "Real-time UDP/TCP", "IoT Prototyping"],
            color: "cyan"
        },
        {
            icon: Brain,
            title: "AI & Smart Systems",
            skills: ["Deep Learning", "Real-time Decision Making", "OpenCV", "MATLAB Simulations"],
            color: "green"
        },
        {
            icon: Hammer,
            title: "Hardware Engineering",
            skills: ["Circuit Debugging", "Soldering", "Real-time Systems", "Audio Processing", "System Integration"],
            color: "orange"
        },
        {
            icon: Radar,
            title: "Live Event & Interaction Tech",
            skills: ["Kinetic Lighting (Madrix)", "VR Integration", "Interactive Installations", "Crowd-reactive Systems"],
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
        <section id="skills" className="min-h-screen flex items-center bg-black py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Compact Section Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                            Technical <span className="text-blue-400">Skills</span>
                        </h2>
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
                        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Not just tools I have used, tools I have mastered to turn imagination into working machines.
                        </p>
                    </div>

                    {/* Ultra Compact Skills Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="bg-gray-900/50 rounded-xl p-4 sm:p-6 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 border border-gray-800/50 h-full flex flex-col">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className={`p-2 bg-gradient-to-br ${getColorClasses(category.color)} rounded-full mr-3`}>
                                        <category.icon size={18} />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-white">{category.title}</h3>
                                </div>

                                <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-1">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className={`px-3 py-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-lg border backdrop-blur-sm text-center`}>
                                            <span className="text-xs sm:text-sm font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;