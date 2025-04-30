import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Pointer from "../components/Pointer";
import { motion, useAnimate } from "framer-motion";
import cursorImage from "../assets/images/cursor-you.svg";
import { Search, Briefcase, ArrowRight, Zap, Globe, CheckCircle } from "lucide-react";

function Hero() {
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    const [mihirPointerScope, mihirPointerAnimate] = useAnimate();
    const [manthanPointerScope, manthanPointerAnimate] = useAnimate();
    const [email, setEmail] = useState("");

    useEffect(() => {
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 0.8 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        mihirPointerAnimate([
            [mihirPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.2 }],
            [mihirPointerScope.current, { y: 0, x: -50 }, { duration: 0.5 }],
            [
                mihirPointerScope.current,
                { y: [0, 18, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        manthanPointerAnimate([
            [manthanPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.6 }],
            [manthanPointerScope.current, { y: 0, x: 125 }, { duration: 0.5 }],
            [
                manthanPointerScope.current,
                { y: [0, 22, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, [leftPointerAnimate, rightPointerAnimate, mihirPointerAnimate, manthanPointerAnimate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setEmail("");
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center overflow-hidden relative pt-24 md:pt-28 lg:pt-34"
            style={{
                cursor: `url(${cursorImage}), auto`,
            }}
        >
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
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
                {/* Pointers */}
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute top-96 left-56 hidden lg:block"
                >
                    <Pointer name="Soham" color="purple" />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute top-4 right-80 hidden lg:block"
                >
                    <Pointer color="red" name="Omkar" />
                </motion.div>

                <motion.div
                    ref={mihirPointerScope}
                    initial={{ opacity: 0, x: -150, y: 100 }}
                    className="absolute top-48 left-24 hidden lg:block"
                >
                    <Pointer color="blue" name="Mihir" />
                </motion.div>

                <motion.div
                    ref={manthanPointerScope}
                    initial={{ opacity: 0, x: 225, y: 100 }}
                    className="absolute top-64 right-32 hidden lg:block"
                >
                    <Pointer color="green" name="Manthan" />
                </motion.div>

                {/* Hero content */}
                <div className="flex justify-center">
                    <motion.div
                        className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="animate-pulse">✨</span> Launching Soon
                    </motion.div>
                </div>

                <motion.h1
                    className="text-5xl md:text-6xl lg:text-8xl font-medium text-center mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Tired of <span className="text-lime-400">endless</span> job hunting?
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
                        Sign Up
                    </Button>
                </motion.form>

                {/* Stats section with improved visuals */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 md:mt-12 max-w-3xl mx-auto pb-12 md:pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/10"
                        whileHover={{ scale: 1.05, borderColor: "rgba(163, 230, 53, 0.3)" }}
                    >
                        <Briefcase className="w-4 h-4 text-lime-400" />
                        <span>10,000+ Jobs</span>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/10"
                        whileHover={{ scale: 1.05, borderColor: "rgba(163, 230, 53, 0.3)" }}
                    >
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span>100+ Companies</span>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/10"
                        whileHover={{ scale: 1.05, borderColor: "rgba(163, 230, 53, 0.3)" }}
                    >
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span>Instant Alerts</span>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/10"
                        whileHover={{ scale: 1.05, borderColor: "rgba(163, 230, 53, 0.3)" }}
                    >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Free Access</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;