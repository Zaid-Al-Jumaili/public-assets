import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xqabreqd', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setShowThankYou(true);
                form.reset();

                // Hide thank you message after 3 seconds
                setTimeout(() => {
                    setShowThankYou(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center bg-black py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Compact Section Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                            Get In <span className="text-blue-400">Touch</span>
                        </h2>
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Whether it is an ambitious idea, a wild activation, or just a cool challenge. I would love to hear from you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Compact Contact Info */}
                        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                            <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-800/50">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Let's Connect</h3>
                                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                                    I'm always open to new collaborations, from immersive tech experiences to real-time systems. Reach out to talk projects, partnerships, or something entirely unexpected.
                                </p>

                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-blue-500/20 rounded-full flex-shrink-0">
                                            <Mail className="text-blue-400" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm">Email</div>
                                            <div className="text-gray-300 text-sm break-all">aljumailizaid@gmail.com</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-purple-500/20 rounded-full flex-shrink-0">
                                            <Phone className="text-purple-400" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm">Phone</div>
                                            <div className="text-gray-300 text-sm">+971 50 721 2599</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-cyan-500/20 rounded-full flex-shrink-0">
                                            <MapPin className="text-cyan-400" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm">Location</div>
                                            <div className="text-gray-300 text-sm">UAE</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 sm:pt-6 border-t border-gray-700/50 mt-4 sm:mt-6">
                                    <h4 className="text-base font-semibold text-white mb-3">Follow Me</h4>
                                    <div className="flex space-x-3">
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
                            </div>
                        </div>

                        {/* Compact Contact Form */}
                        <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-800/50 order-1 lg:order-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send a Message</h3>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-none text-sm"
                                    ></textarea>
                                </div>

                                {/* Optional: Subject for email notification */}
                                <input type="hidden" name="_subject" value="New message from your website!" />

                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm font-medium"
                                >
                                    <Send size={16} className="mr-2" />
                                    Send Message
                                </button>
                            </form>

                            {/* Thank You Popup */}
                            {showThankYou && (
                                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                                    <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full text-center border border-gray-700">
                                        <div className="mb-4">
                                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Send className="text-green-400" size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                                            <p className="text-gray-300">
                                                Your message has been sent successfully. I'll get back to you soon!
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setShowThankYou(false)}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;