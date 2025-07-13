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
    const [isMobile, setIsMobile] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const momentumRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const dragStartRef = useRef({ x: 0, rotation: 0 });

    // Detect mobile devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const projects = [
        {
            title: "RoboDogs Show",
            description: "Programmed synchronized robotic dogs for live performances at Boulevard Riyadh City, Address Sky View Dubai & Karate Youth League, integrating AI-driven choreography.",
            image: "/public-assets/assets/RoboDog.jpg",
            videoUrl: "https://youtu.be/Zfgvn4ExSnY",
            tech: ["Unitree Go2 SDK", "Python", "AI Choreography", "Real-time Control"],
            github: "https://github.com",
            demo: "https://youtu.be/rX4V7y21jgk",
            award: "Live Performance Success"
        },
        {
            title: "RoboDaVinci",
            description: "Developed a KUKA-powered robotic artist capable of large-scale automated drawings, showcasing the intersection of robotics and creative arts.",
            image: "/public-assets/assets/RoboDaVinci.jpg",
            videoUrl: null,
            tech: ["KUKA KRL", "Computer Vision", "Path Planning", "Artistic Algorithms"],
            github: "https://github.com",
            demo: "https://youtube.com/shorts/fJsehE8F3C4?feature=share",
            award: "Creative Technology Award"
        },
        {
            title: "RoboCoaster",
            description: "Engineered a KUKA-based immersive ride, synchronizing VR gameplay with real-time robotic motion for a 4m-long RoboCoaster, showcased at the Saudi Event Show.",
            image: "/public-assets/assets/RoboCoaster.jpg",
            videoUrl: null,
            tech: ["KUKA", "VR Integration", "Real-time Synchronization", "Motion Control"],
            github: "https://github.com",
            demo: "https://youtu.be/jiU9_r1_byg",
            award: "Saudi Event Show Feature"
        },
        {
            title: "Tic-Tac-Toe Robot",
            description: "Designed an AI-powered interactive game with real-time decision-making, demonstrating human-robot interaction capabilities.",
            image: "/public-assets/assets/tictactoe.jpg",
            videoUrl: null,
            tech: ["AI Decision Making", "Computer Vision", "Human-Robot Interaction", "Real-time Processing"],
            github: "https://github.com",
            demo: "https://youtu.be/fdJN5ZLLYEw",
            award: "Interactive Innovation"
        },
        {
            title: "Saudi House (Qatar World Cup)",
            description: "Developed an interactive LED system for a giant screen stage, where LED strips dynamically reacted to crowd cheering using real-time audio level analysis.",
            image: "/public-assets/assets/Qatar2.jpg",
            videoUrl: null,
            tech: ["LED Control", "Audio Processing", "Real-time Analysis", "Crowd Interaction"],
            github: "https://github.com",
            demo: "https://youtu.be/GpOOjo4HGoI",
            award: "Qatar World Cup Feature"
        },
        {
            title: "Karate1 Youth League Fujairah",
            description: "Developed an interactive LED system for a giant screen stage, where LED strips dynamically reacted to crowd cheering using real-time audio level analysis.",
            image: "/public-assets/assets/karate.jpg",
            videoUrl: null,
            tech: ["LED Control", "Audio Processing", "Real-time Analysis", "Crowd Interaction"],
            github: "https://github.com",
            demo: "https://youtu.be/Zfgvn4ExSnY",
            award: null
        },
        {
            title: "Arab Health Congress",
            description: "Developed an interactive LED system for a giant screen stage, where LED strips dynamically reacted to crowd cheering using real-time audio level analysis.",
            image: "/public-assets/assets/health.jpg",
            videoUrl: null,
            tech: ["LED Control", "Audio Processing", "Real-time Analysis", "Crowd Interaction"],
            github: "https://github.com",
            demo: "https://youtube.com/shorts/NbzPJVSslOE",
            award: null
        },
        {
            title: "Riaydh Boulevard",
            description: "Developed an interactive LED system for a giant screen stage, where LED strips dynamically reacted to crowd cheering using real-time audio level analysis.",
            image: "/public-assets/assets/riyadh.jpg",
            videoUrl: null,
            tech: ["LED Control", "Audio Processing", "Real-time Analysis", "Crowd Interaction"],
            github: "https://github.com",
            demo: "https://youtu.be/k9v2I8CcKjs",
            award: null
        },
        {
            title: "Kinetic Light Displays",
            description: "Led automation & AI integrations for high-profile events, including GISEC and CityScape KSA, creating immersive lighting experiences.",
            image: "/public-assets/assets/kinetic.jpg",
            videoUrl: null,
            tech: ["Madrix", "Kinetic Lighting", "AI Integration", "Event Automation"],
            github: "https://github.com",
            demo: "https://youtube.com/shorts/Klf6NXSBBEg?feature=share",
            award: "Event Technology Excellence"
        }
    ];

    const totalProjects = projects.length;
    const angleStep = 360 / totalProjects;

    // Auto-rotation effect
    useEffect(() => {
        if (isRotating && !isDragging && Math.abs(dragVelocity) < 0.1) {
            intervalRef.current = setInterval(() => {
                setRotation(prev => prev + (isMobile ? 0.2 : 0.3));
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
    }, [isRotating, isDragging, dragVelocity, isMobile]);

    // Momentum effect
    useEffect(() => {
        if (!isDragging && Math.abs(dragVelocity) > 0.1) {
            momentumRef.current = setInterval(() => {
                setDragVelocity(prev => {
                    const newVelocity = prev * 0.95;
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
        const sensitivity = isMobile ? 0.3 : 0.5;
        const rotationDelta = deltaX * sensitivity;
        const newRotation = dragStartRef.current.rotation + rotationDelta;

        setRotation(newRotation);

        const currentTime = Date.now();
        const timeDelta = currentTime - lastDragTime;
        if (timeDelta > 0) {
            const positionDelta = clientX - lastDragPosition;
            const velocity = (positionDelta * sensitivity) / timeDelta * 16;
            setDragVelocity(velocity);
        }

        setLastDragTime(currentTime);
        setLastDragPosition(clientX);
    }, [isDragging, lastDragTime, lastDragPosition, isMobile]);

    // Handle drag end
    const handleDragEnd = useCallback(() => {
        setIsDragging(false);

        if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grab';
        }

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
        if (!isDragging && !isMobile) {
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

        // Responsive carousel dimensions - more compact
        const radiusX = isMobile ? 180 : window.innerWidth < 1024 ? 250 : 300;
        const radiusZ = isMobile ? 100 : window.innerWidth < 1024 ? 140 : 170;

        const x = Math.sin(radian) * radiusX;
        const z = Math.cos(radian) * radiusZ;
        const y = Math.sin(radian * 0.3) * (isMobile ? 10 : 20); // Reduced vertical movement

        const normalizedZ = (z + radiusZ) / (radiusZ * 2);
        const scale = 0.7 + (normalizedZ * (isMobile ? 0.4 : 0.5));
        const opacity = 0.4 + (normalizedZ * 0.6);
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
        <section id="projects" className="min-h-screen flex items-center bg-gray-900 py-8 sm:py-12 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Compact Projects Headline */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                                Projects
                            </span>
                        </h2>
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Systems that move, react, entertain. and prove what’s possible when tech meets vision.
                        </p>
                    </div>

                    {/* Compact Carousel Container */}
                    <div className={`relative flex items-center justify-center ${isMobile ? 'h-[280px]' : 'h-[320px] sm:h-[360px]'
                        }`}>
                        <div
                            ref={carouselRef}
                            className="relative w-full h-full select-none"
                            style={{
                                perspective: isMobile ? '600px' : '900px',
                                transformStyle: 'preserve-3d',
                                cursor: isDragging ? 'grabbing' : 'grab'
                            }}
                            onMouseDown={!isMobile ? handleMouseDown : undefined}
                            onMouseMove={!isMobile ? handleMouseMove : undefined}
                            onMouseUp={!isMobile ? handleMouseUp : undefined}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Compact spotlight effect */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isMobile ? 'w-48 h-48' : 'w-64 sm:w-72 h-64 sm:h-72'
                                        }`}
                                    style={{
                                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                                        filter: 'blur(15px)',
                                        opacity: isDragging ? 0.5 : 1
                                    }}
                                ></div>
                            </div>

                            {projects.map((project, index) => {
                                const { transform, opacity, zIndex, isAtFront, scale, normalizedZ } = getProjectTransform(index);
                                const isHovered = hoveredProject === index && !isDragging && !isMobile;

                                // Compact card dimensions
                                const baseWidth = isMobile ? 140 : 180;
                                const baseHeight = isMobile ? 100 : 135;
                                const hoverWidth = isMobile ? 180 : 280;
                                const hoverHeight = isMobile ? 135 : 210;

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
                                        {/* Compact Project Card */}
                                        <div
                                            className={`relative bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 group ${isAtFront ? 'shadow-2xl shadow-blue-500/30' : 'shadow-lg shadow-black/50'
                                                }`}
                                            style={{
                                                width: isHovered ? `${hoverWidth}px` : `${baseWidth + scale * (isMobile ? 20 : 40)}px`,
                                                height: isHovered ? `${hoverHeight}px` : `${baseHeight + scale * (isMobile ? 15 : 30)}px`,
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
                                                {isHovered && project.videoUrl && !isDragging && !isMobile ? (
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
                                                        {project.videoUrl && !isDragging && !isMobile && (
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className={`bg-black/50 rounded-full p-2 transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0'
                                                                    }`}>
                                                                    <Play className="text-white" size={isMobile ? 14 : 20} />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </>
                                                )}

                                                {/* Award Badge */}
                                                {project.award && (isAtFront || isHovered) && (
                                                    <div className="absolute top-2 right-2 bg-yellow-500/90 text-black px-2 py-1 rounded-full text-xs font-medium flex items-center">
                                                        <Award size={8} className="mr-1" />
                                                        <span className="hidden sm:inline text-xs">Award</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Compact Project Info */}
                                            <div className="p-2 sm:p-3">
                                                <h3 className={`font-bold text-white mb-1 transition-all duration-300 ${isHovered ? 'text-base sm:text-lg' : isAtFront ? 'text-sm' : 'text-xs'
                                                    }`}>
                                                    {project.title}
                                                </h3>

                                                {/* Expanded details on hover (desktop only) */}
                                                {isHovered && !isDragging && !isMobile && (
                                                    <div className="space-y-2 animate-in fade-in duration-300">
                                                        <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
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
                                                    <div className="flex space-x-2 mt-2">
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-xs"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Play size={10} className="mr-1" />
                                                            <span className="hidden sm:inline">Demo</span>
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
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                            <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="p-4 sm:p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white pr-4">{projects[selectedProject].title}</h3>
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="text-gray-400 hover:text-white transition-colors p-2 flex-shrink-0"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <img
                                                src={projects[selectedProject].image}
                                                alt={projects[selectedProject].title}
                                                className="w-full h-48 object-cover rounded-lg mb-4"
                                            />
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                {projects[selectedProject].description}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {projects[selectedProject].tech.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {projects[selectedProject].award && (
                                                <div className="text-yellow-400 mb-6 flex items-center text-sm">
                                                    <Award size={16} className="mr-2" />
                                                    {projects[selectedProject].award}
                                                </div>
                                            )}

                                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                                <a
                                                    href={projects[selectedProject].demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm w-full"
                                                >
                                                    <ExternalLink size={18} className="mr-2" />
                                                    Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Compact Interactive Instructions */}
                    <div className="text-center mt-6 sm:mt-8">
                        <div className="bg-gray-800/50 rounded-xl p-3 sm:p-4 max-w-xl mx-auto border border-gray-700/50">
                            <p className="text-gray-300 text-sm sm:text-base mb-2">
                                 <strong>Interactive Controls</strong>
                            </p>
                            <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-400">
                                <div className="space-y-1">
                                    <p>• <strong>{isMobile ? 'Swipe' : 'Drag'}</strong> to rotate manually</p>
                                    <p>• <strong>Flick</strong> for momentum</p>
                                </div>
                                <div className="space-y-1">
                                    {!isMobile && <p>• <strong>Hover</strong> to pause & expand</p>}
                                    <p>• <strong>Tap/Click</strong> for details</p>
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