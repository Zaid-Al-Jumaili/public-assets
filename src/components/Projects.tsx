import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Github, Play, Award, X } from 'lucide-react';

const Projects = () => {
    const [rotation, setRotation] = useState(0);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [isRotating, setIsRotating] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [dragVelocity, setDragVelocity] = useState(0);
    const [lastDragTime, setLastDragTime] = useState(0);
    const [lastDragPosition, setLastDragPosition] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const momentumRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const dragStartRef = useRef({ x: 0, rotation: 0 });

    const projects = [
        {
            title: "RoboDogs Show",
            description: "Programmed synchronized robotic dogs for live performances at Boulevard Riyadh City, Address Sky View Dubai & Karate Youth League, integrating AI-driven choreography.",
            image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
            videoUrl: "https://youtu.be/Zfgvn4ExSnY",
            tech: ["Unitree Go2 SDK", "Python", "AI Choreography", "Real-time Control"],
            github: "https://github.com",
            demo: "https://youtu.be/Zfgvn4ExSnY",
            award: "Live Performance Success"
        },
        {
            title: "RoboDaVinci",
            description: "Developed a KUKA-powered robotic artist capable of large-scale automated drawings, showcasing the intersection of robotics and creative arts.",
            image: "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=600",
            videoUrl: null,
            tech: ["KUKA KRL", "Computer Vision", "Path Planning", "Artistic Algorithms"],
            github: "https://github.com",
            demo: "https://demo.com",
            award: "Creative Technology Award"
        },
        {
            title: "RoboCoaster",
            description: "Engineered a KUKA-based immersive ride, synchronizing VR gameplay with real-time robotic motion for a 4m-long RoboCoaster, showcased at the Saudi Event Show.",
            image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
            videoUrl: null,
            tech: ["KUKA", "VR Integration", "Real-time Synchronization", "Motion Control"],
            github: "https://github.com",
            demo: "https://demo.com",
            award: "Saudi Event Show Feature"
        },
        {
            title: "Tic-Tac-Toe Robot",
            description: "Designed an AI-powered interactive game with real-time decision-making, demonstrating human-robot interaction capabilities.",
            image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
            videoUrl: null,
            tech: ["AI Decision Making", "Computer Vision", "Human-Robot Interaction", "Real-time Processing"],
            github: "https://github.com",
            demo: "https://demo.com",
            award: "Interactive Innovation"
        },
        {
            title: "Saudi House (Qatar World Cup)",
            description: "Developed an interactive LED system for a giant screen stage, where LED strips dynamically reacted to crowd cheering using real-time audio level analysis.",
            image: "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=600",
            videoUrl: null,
            tech: ["LED Control", "Audio Processing", "Real-time Analysis", "Crowd Interaction"],
            github: "https://github.com",
            demo: "https://demo.com",
            award: "Qatar World Cup Feature"
        },
        {
            title: "Kinetic Light Displays",
            description: "Led automation & AI integrations for high-profile events, including GISEC and CityScape KSA, creating immersive lighting experiences.",
            image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
            videoUrl: null,
            tech: ["Madrix", "Kinetic Lighting", "AI Integration", "Event Automation"],
            github: "https://github.com",
            demo: "https://demo.com",
            award: "Event Technology Excellence"
        }
    ];

    const totalProjects = projects.length;
    const angleStep = 360 / totalProjects;

    // Auto-rotation effect
    useEffect(() => {
        if (isRotating && !isDragging && Math.abs(dragVelocity) < 0.1) {
            intervalRef.current = setInterval(() => {
                setRotation(prev => prev + 0.3);
            }, 50);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRotating, isDragging, dragVelocity]);

    // Momentum effect
    useEffect(() => {
        if (!isDragging && Math.abs(dragVelocity) > 0.1) {
            momentumRef.current = setInterval(() => {
                setDragVelocity(prev => {
                    const newVelocity = prev * 0.95; // Friction
                    if (Math.abs(newVelocity) < 0.1) {
                        setIsRotating(true);
                        return 0;
                    }
                    setRotation(current => current + newVelocity);
                    return newVelocity;
                });
            }, 16);
        } else {
            if (momentumRef.current) {
                clearInterval(momentumRef.current);
            }
        }

        return () => {
            if (momentumRef.current) {
                clearInterval(momentumRef.current);
            }
        };
    }, [isDragging, dragVelocity]);

    // Easing function for smooth transitions
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    // Handle drag start
    const handleDragStart = useCallback((clientX: number) => {
        setIsDragging(true);
        setIsRotating(false);
        setDragVelocity(0);
        dragStartRef.current = { x: clientX, rotation };
        setLastDragTime(Date.now());
        setLastDragPosition(clientX);

        if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grabbing';
        }
    }, [rotation]);

    // Handle drag move
    const handleDragMove = useCallback((clientX: number) => {
        if (!isDragging) return;

        const deltaX = clientX - dragStartRef.current.x;
        const rotationDelta = deltaX * 0.5; // Sensitivity factor
        const newRotation = dragStartRef.current.rotation + rotationDelta;

        setRotation(newRotation);

        // Calculate velocity for momentum
        const currentTime = Date.now();
        const timeDelta = currentTime - lastDragTime;
        if (timeDelta > 0) {
            const positionDelta = clientX - lastDragPosition;
            const velocity = (positionDelta * 0.5) / timeDelta * 16; // Convert to per-frame velocity
            setDragVelocity(velocity);
        }

        setLastDragTime(currentTime);
        setLastDragPosition(clientX);
    }, [isDragging, lastDragTime, lastDragPosition]);

    // Handle drag end
    const handleDragEnd = useCallback(() => {
        setIsDragging(false);

        if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grab';
        }

        // If velocity is low, return to auto-rotation immediately
        if (Math.abs(dragVelocity) < 2) {
            setDragVelocity(0);
            setTimeout(() => setIsRotating(true), 1000);
        }
    }, [dragVelocity]);

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault();
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    // Global mouse events
    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                handleDragMove(e.clientX);
            }
        };

        const handleGlobalMouseUp = () => {
            if (isDragging) {
                handleDragEnd();
            }
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleGlobalMouseMove);
            document.addEventListener('mouseup', handleGlobalMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [isDragging, handleDragMove, handleDragEnd]);

    const handleProjectHover = (index: number | null) => {
        if (!isDragging) {
            setHoveredProject(index);
            setIsRotating(index === null && Math.abs(dragVelocity) < 0.1);
        }
    };

    const handleProjectClick = (index: number) => {
        if (!isDragging) {
            setSelectedProject(selectedProject === index ? null : index);
        }
    };

    const getYouTubeEmbedUrl = (url: string) => {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0] || url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
    };

    const getProjectTransform = (index: number) => {
        const angle = (index * angleStep + rotation) % 360;
        const radian = (angle * Math.PI) / 180;

        // Elliptical orbit for tilted donut effect
        const radiusX = 350; // Horizontal radius
        const radiusZ = 200; // Depth radius (smaller for tilt effect)

        const x = Math.sin(radian) * radiusX;
        const z = Math.cos(radian) * radiusZ;
        const y = Math.sin(radian * 0.3) * 30; // Slight vertical movement for tilt

        // Calculate scale based on z position (depth)
        const normalizedZ = (z + radiusZ) / (radiusZ * 2); // Normalize to 0-1
        const scale = 0.7 + (normalizedZ * 0.6); // Scale from 0.7 to 1.3

        // Calculate opacity based on position
        const opacity = 0.4 + (normalizedZ * 0.6); // Opacity from 0.4 to 1.0

        // Determine if project is at the front (closest to viewer)
        const isAtFront = z > radiusZ * 0.7;

        return {
            transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
            opacity,
            zIndex: Math.round(z + radiusZ + 100),
            isAtFront,
            scale,
            normalizedZ
        };
    };

    return (
        <section id="projects" className="py-20 bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Projects Headline */}
                    <div className="text-center mb-16">
                        <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                                Projects
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Innovative robotics solutions that push the boundaries of what's possible
                        </p>
                    </div>

                    {/* Tilted Donut Carousel */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        <div
                            ref={carouselRef}
                            className="relative w-full h-full select-none"
                            style={{
                                perspective: '1200px',
                                transformStyle: 'preserve-3d',
                                cursor: isDragging ? 'grabbing' : 'grab'
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Spotlight effect for front card */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div
                                    className="absolute top-1/2 left-1/2 w-96 h-96 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                                        filter: 'blur(20px)',
                                        opacity: isDragging ? 0.5 : 1
                                    }}
                                ></div>
                            </div>

                            {projects.map((project, index) => {
                                const { transform, opacity, zIndex, isAtFront, scale, normalizedZ } = getProjectTransform(index);
                                const isHovered = hoveredProject === index && !isDragging;

                                return (
                                    <div
                                        key={index}
                                        className="absolute top-1/2 left-1/2 cursor-pointer transition-all duration-300 ease-out"
                                        style={{
                                            transform: `translate(-50%, -50%) ${transform}`,
                                            opacity: isDragging ? opacity * 0.8 : opacity,
                                            zIndex,
                                            transformStyle: 'preserve-3d',
                                            transitionProperty: isDragging ? 'none' : 'all'
                                        }}
                                        onMouseEnter={() => handleProjectHover(index)}
                                        onMouseLeave={() => handleProjectHover(null)}
                                        onClick={() => handleProjectClick(index)}
                                    >
                                        {/* Project Card */}
                                        <div
                                            className={`relative bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 group ${isAtFront ? 'shadow-2xl shadow-blue-500/30' : 'shadow-lg shadow-black/50'
                                                }`}
                                            style={{
                                                width: isHovered ? '320px' : `${220 + scale * 60}px`,
                                                height: isHovered ? '240px' : `${165 + scale * 45}px`,
                                                border: isAtFront ? '2px solid rgba(59, 130, 246, 0.6)' : '1px solid rgba(75, 85, 99, 0.3)',
                                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                                filter: isAtFront ? 'brightness(1.2)' : `brightness(${0.7 + normalizedZ * 0.4})`,
                                                transitionProperty: isDragging ? 'none' : 'all'
                                            }}
                                        >
                                            {/* Enhanced glow effect for front project */}
                                            {isAtFront && (
                                                <div
                                                    className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-xl blur-xl -z-10"
                                                    style={{
                                                        animation: isDragging ? 'none' : 'pulse 2s infinite'
                                                    }}
                                                ></div>
                                            )}

                                            {/* Project Image/Video */}
                                            <div className="relative w-full h-2/3 overflow-hidden">
                                                {isHovered && project.videoUrl && !isDragging ? (
                                                    <iframe
                                                        src={getYouTubeEmbedUrl(project.videoUrl)}
                                                        className="w-full h-full object-cover"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                ) : (
                                                    <>
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            draggable={false}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                        {project.videoUrl && !isDragging && (
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className={`bg-black/50 rounded-full p-3 transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0'
                                                                    }`}>
                                                                    <Play className="text-white" size={24} />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </>
                                                )}

                                                {/* Award Badge */}
                                                {project.award && (isAtFront || isHovered) && (
                                                    <div className="absolute top-3 right-3 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                                        <Award size={12} className="mr-1" />
                                                        Award
                                                    </div>
                                                )}
                                            </div>

                                            {/* Project Info */}
                                            <div className="p-4">
                                                <h3 className={`font-bold text-white mb-2 transition-all duration-300 ${isHovered ? 'text-xl' : isAtFront ? 'text-lg' : 'text-sm'
                                                    }`}>
                                                    {project.title}
                                                </h3>

                                                {/* Expanded details on hover */}
                                                {isHovered && !isDragging && (
                                                    <div className="space-y-3 animate-in fade-in duration-300">
                                                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                                                            {project.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                                                                <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Action buttons for front/hovered cards */}
                                                {(isAtFront || isHovered) && !isDragging && (
                                                    <div className="flex space-x-3 mt-3">
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center text-gray-300 hover:text-white transition-colors text-xs"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Github size={14} className="mr-1" />
                                                            Code
                                                        </a>
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-xs"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Play size={14} className="mr-1" />
                                                            Demo
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Project Details Modal */}
                    {selectedProject !== null && (
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
                            <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-bold text-white">{projects[selectedProject].title}</h3>
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="text-gray-400 hover:text-white transition-colors p-2"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <img
                                                src={projects[selectedProject].image}
                                                alt={projects[selectedProject].title}
                                                className="w-full h-64 object-cover rounded-lg mb-4"
                                            />
                                            <p className="text-gray-300 leading-relaxed">
                                                {projects[selectedProject].description}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {projects[selectedProject].tech.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {projects[selectedProject].award && (
                                                <div className="text-yellow-400 mb-6 flex items-center">
                                                    <Award size={16} className="mr-2" />
                                                    {projects[selectedProject].award}
                                                </div>
                                            )}

                                            <div className="flex space-x-4">
                                                <a
                                                    href={projects[selectedProject].github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                                                >
                                                    <Github size={20} className="mr-2" />
                                                    View Code
                                                </a>
                                                <a
                                                    href={projects[selectedProject].demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                                                >
                                                    <ExternalLink size={20} className="mr-2" />
                                                    Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Interactive Instructions */}
                    <div className="text-center mt-12">
                        <div className="bg-gray-800/50 rounded-xl p-6 max-w-2xl mx-auto">
                            <p className="text-gray-300 text-lg mb-2">
                                🎮 <strong>Interactive Controls</strong>
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                                <div>
                                    <p>• <strong>Drag</strong> horizontally to rotate manually</p>
                                    <p>• <strong>Flick</strong> for momentum & inertia</p>
                                </div>
                                <div>
                                    <p>• <strong>Hover</strong> to pause & expand cards</p>
                                    <p>• <strong>Click</strong> for full project details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;