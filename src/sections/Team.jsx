import React, { useState, useEffect } from "react";
import { Linkedin, X, Github } from "lucide-react";
import Tag from "../components/Tag";

const teamMembers = [
    {
        name: "Mihir Pande",
        position: "Software Engineering Intern @ CrowdStrike",
        photo: "https://avatars.githubusercontent.com/u/127537487?s=400&u=8e1785c20771a1f829ecfe95cf188907e3d42b89&v=4",
        bio: "Interning at CrowdStrike, Mihir works on secure backend systems and cloud tools. He’s into clean code, debugging, and building scalable apps.",
        linkedin: "https://linkedin.com/in/meeheer123",
        github: "https://github.com/meeheer123"
    },
    {
        name: "Soham Mhatre",
        position: "AI/ML Intern @ WYSWYG Solutions",
        photo: "https://avatars.githubusercontent.com/u/150317894?v=4",
        bio: "Soham works on backend, authentication, and integrations for AI and low-code tools at WYSWYG. Skilled at building robust systems and connecting platforms seamlessly.",
        linkedin: "https://www.linkedin.com/in/mhatresoham/",
        github: "https://github.com/SohamMhatre09"
    },
    {
        "name": "Omkar Khoche",
        "position": "Frontend Developer Intern @ WYSWYG Solutions",
        "photo": "https://res.cloudinary.com/dkbzscmmq/image/upload/v1746024548/y1og3bjseyrodjnauja9.png",
        "bio": "Omkar builds clean and user-friendly frontend interfaces for AI and low-code tools at WYSWYG. Skilled in React, UI/UX improvements, and rapid prototyping.",
        "linkedin": "https://www.linkedin.com/in/omkarkhoche3448/",
        "github": "https://github.com/omkarkhoche"
    },
    {
        name: "Manthan Barhate",
        position: "Data Science EngineeringIntern @ SAS",
        photo: "https://avatars.githubusercontent.com/u/142141808?v=4",
        bio: "Manthan’s at SAS exploring ML models and real-world data analysis. Loves building visualizations and solving data-heavy problems.",
        linkedin: "https://www.linkedin.com/in/manthanbarhate/",
        github: "https://github.com/manthanbarhate"
    },
];

function Team() {
    const [selectedMember, setSelectedMember] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedMember) {
            const lenis = window.lenis;
            if (lenis) {
                lenis.stop();
            }
            document.body.style.overflow = 'hidden';
        } else {
            const lenis = window.lenis;
            if (lenis) {
                lenis.start();
            }
            document.body.style.overflow = '';
        }

        return () => {
            const lenis = window.lenis;
            if (lenis) {
                lenis.start();
            }
            document.body.style.overflow = '';
        };
    }, [selectedMember]);

    return (
        <section id="team" className="py-12 md:py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-center">
                    <Tag>Our Team</Tag>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-4 max-w-2xl mx-auto leading-tight">
                    Meet the <span className="text-lime-400">innovators</span>
                </h2>
                <p className="text-white/50 text-sm md:text-base text-center mt-3 md:mt-4 max-w-2xl mx-auto px-2">
                    Passionate individuals working together to revolutionize your job search experience
                </p>

                <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="group relative backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-lime-400/30 transition-all duration-500 ease-in-out cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="aspect-square sm:aspect-[4/5] overflow-hidden">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-8 md:-bottom-12 group-hover:bottom-0 transition-all duration-500 ease-in-out left-0 right-0 p-2 sm:p-4">
                                <h3 className="text-sm sm:text-lg md:text-xl font-medium text-white group-hover:text-lime-400 transition-colors truncate">
                                    {member.name}
                                </h3>
                                <p className="text-white/70 text-xs md:text-sm mt-0.5 sm:mt-1 truncate">
                                    {member.position}
                                </p>

                                <div className="flex space-x-2 sm:space-x-3 mt-2 md:mt-4 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out
                                opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/10 p-1.5 sm:p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Linkedin size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4" />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/10 p-1.5 sm:p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedMember && (
                    <div
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4"
                        onClick={() => setSelectedMember(null)}
                    >
                        <div
                            className="bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 max-w-lg w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 rounded-lg bg-white/10 hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </button>

                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-2 sm:mt-0">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 mx-auto sm:mx-0">
                                    <img
                                        src={selectedMember.photo}
                                        alt={selectedMember.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-medium mb-1 text-center sm:text-left">{selectedMember.name}</h3>
                                    <p className="text-lime-400 text-sm mb-3 md:mb-4 text-center sm:text-left">{selectedMember.position}</p>
                                    <p className="text-white/70 text-sm leading-relaxed">{selectedMember.bio}</p>

                                    <div className="flex gap-3 mt-5 md:mt-6 justify-center sm:justify-start">
                                        {selectedMember.linkedin && (
                                            <a 
                                                href={selectedMember.linkedin} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/10 p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                        {selectedMember.github && (
                                            <a 
                                                href={selectedMember.github} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/10 p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Team;