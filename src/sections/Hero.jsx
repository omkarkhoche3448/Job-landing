import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import cursorImage from "../assets/images/cursor-you.svg";
// Import new icons and remove unused ones
import { Search, BriefcaseBusiness, Sparkles, Network, BadgeCheck } from "lucide-react";

function Hero() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setEmail("");
    };

    // Simplified CSS for the flowing text effect
    const flowingTextStyle = {
        backgroundImage: 'linear-gradient(90deg, #4ade80, #22c55e, #4ade80)',
        backgroundSize: '200% 100%',
        animation: 'flowingText 8s linear infinite',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        display: 'inline-block'
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center overflow-hidden relative pt-24 md:pt-28 lg:pt-34"
            style={{
                cursor: `url(${cursorImage}), auto`,
            }}
        >
            {/* Simplified CSS keyframes */}
            <style jsx="true">{`
                @keyframes flowingText {
                    0% { background-position: 300% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes shimmerEffect {
                     0%, 30% { transform: translateX(-100%); }
                     50%, 80% { transform: translateX(100%); }
                     80.01%, 100% { transform: translateX(-100%); }
                }
                
                .shimmer-effect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transform: translateX(-100%);
                    animation: shimmerEffect 4s linear infinite;
                }
            `}</style>

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-lime-400/10 to-blue-500/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                    className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-lime-400/10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -30, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                />
            </div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Hero content */}
                <div className="flex justify-center">
                    <motion.div
                        className="inline-flex py-1.5 px-4 rounded-full text-white/90 font-medium relative overflow-hidden bg-[#171717] border border-white/10 group"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="shimmer-effect"></div>
                        <span className="relative z-10 mr-1.5">✨</span>
                        <span className="relative z-10">Launching Soon</span>
                    </motion.div>
                </div>

                <motion.h1
                    className="text-5xl md:text-6xl lg:text-8xl font-medium text-center mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Tired of <span style={flowingTextStyle}>endless</span> job hunting?
                </motion.h1>

                <motion.p
                    className="text-center text-lg md:text-xl text-white/70 mt-6 md:mt-8 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Handjobs brings every opportunity to your fingertips — from LinkedIn to ZipRecruiter, find it all in one place. No more switching tabs.
                </motion.p>

                <motion.form
                    className="mx-auto flex border border-white/20 rounded-full p-2 mt-8 md:mt-10 max-w-lg bg-white/5 backdrop-blur-sm shadow-xl hover:border-lime-400/30 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    onSubmit={handleSubmit}
                >
                    <div className="flex items-center px-3 text-white/40">
                        <Search size={18} />
                    </div>
                    <input
                        type="email"
                        placeholder="Enter your email for early access"
                        className="bg-transparent px-2 flex-1 w-full focus:outline-none text-white selection:bg-white/10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Button
                        size="sm"
                        className="whitespace-nowrap gap-2 group"
                        type="submit"
                        variant="primary"
                    >
                        I’m Interested
                    </Button>
                </motion.form>

                {/* Stats section with improved visuals */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 md:mt-12 max-w-3xl mx-auto pb-12 md:pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {/* Updated stat item styling with new icon */}
                    <motion.div
                        className="flex items-center gap-2 bg-neutral-800/80 text-neutral-200 px-4 py-2 rounded-full border border-neutral-700/80 transition-colors duration-300"
                        whileHover={{ borderColor: "#a3e635" /* lime-400 */ }}
                    >
                        <BriefcaseBusiness className="w-4 h-4 text-lime-400 shrink-0" />
                        <span>10,000+ Jobs</span>
                    </motion.div>

                    {/* Updated stat item styling with new icon */}
                    <motion.div
                        className="flex items-center gap-2 bg-neutral-800/80 text-neutral-200 px-4 py-2 rounded-full border border-neutral-700/80 transition-colors duration-300"
                        whileHover={{ borderColor: "#60a5fa" /* blue-400 */ }}
                    >
                        <Network className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>100+ Companies</span>
                    </motion.div>

                    {/* Updated stat item styling with new icon */}
                    <motion.div
                        className="flex items-center gap-2 bg-neutral-800/80 text-neutral-200 px-4 py-2 rounded-full border border-neutral-700/80 transition-colors duration-300"
                        whileHover={{ borderColor: "#facc15" /* yellow-400 */ }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                        <span>Instant Alerts</span>
                    </motion.div>

                    {/* Updated stat item styling with new icon */}
                    <motion.div
                        className="flex items-center gap-2 bg-neutral-800/80 text-neutral-200 px-4 py-2 rounded-full border border-neutral-700/80 transition-colors duration-300"
                        whileHover={{ borderColor: "#4ade80" /* green-400 */ }}
                    >
                        <BadgeCheck className="w-4 h-4 text-green-400 shrink-0" />
                        <span>Free Access</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default React.memo(Hero);