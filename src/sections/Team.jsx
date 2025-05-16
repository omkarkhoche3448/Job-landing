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
        <section id="team" className="py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-center">
                    <Tag>Our Team</Tag>
                </div>
                <h2 className="text-4xl lg:text-5xl font-medium text-center mt-4 max-w-2xl mx-auto leading-tight">
                    Meet the <span className="text-lime-400">innovators</span>
                </h2>
                <p className="text-white/50 text-base text-center mt-4 max-w-2xl mx-auto">
                    Passionate individuals working together to revolutionize your job search experience
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="group relative backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-lime-400/30 transition-all duration-500 ease-in-out cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-12 group-hover:bottom-0 transition-all duration-500 ease-in-out left-0 right-0 p-4">
                                <h3 className="text-xl font-medium text-white group-hover:text-lime-400 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-white/70 text-sm mt-1">{member.position}</p>

                                <div className="flex space-x-3 mt-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            className="bg-white/10 p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a
                                            href={member.github}
                                            className="bg-white/10 p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={16} />
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
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedMember(null)}
                    >
                        <div
                            className="bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-lg w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-lime-400/20 hover:text-lime-400 transition-all"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
                                    <img
                                        src={selectedMember.photo}
                                        alt={selectedMember.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium mb-1">{selectedMember.name}</h3>
                                    <p className="text-lime-400 text-sm mb-4">{selectedMember.position}</p>
                                    <p className="text-white/70 text-sm leading-relaxed">{selectedMember.bio}</p>

                                    <div className="flex gap-3 mt-6">
                                        {selectedMember.linkedin && (
                                            <a href={selectedMember.linkedin} className="bg-white/10 p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all">
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                        {selectedMember.github && (
                                            <a href={selectedMember.github} className="bg-white/10 p-2 rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-all">
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