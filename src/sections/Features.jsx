import React from "react";
import FeatureCard from "../components/FeatureCard";
import Tag from "../components/Tag";
import { Search, Filter, Bell, Briefcase, Clock, Zap, Target } from "lucide-react";
import Key from "../components/Key";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
    "Smart Filters",
    "Job Alerts",
    "One-Click Apply",
    "Resume Builder",
    "Salary Insights",
    "Company Reviews",
    "Interview Prep",
];

const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function Features() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <section id="features" className="py-16 relative overflow-hidden" ref={containerRef}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex justify-center">
                        <Tag>Features</Tag>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-medium text-center mt-4 max-w-2xl mx-auto leading-tight">
                        Tools for your <span className="text-lime-400">career journey</span>
                    </h2>
                    <motion.div
                        variants={parentVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5">
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="h-full flex"
                            >
                                <FeatureCard
                                    title="Smart Job Matching"
                                    description="Our AI analyzes your skills and preferences to find the perfect job matches"
                                    className="md:col-span-2 lg:col-span-1 flex-grow"
                                >
                                    <div className="aspect-video flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute -top-6 -left-6 bg-blue-500/20 p-4 rounded-full animate-pulse">
                                                <Target className="w-8 h-8 text-blue-400" />
                                            </div>
                                            <div className="bg-neutral-800 p-5 rounded-xl border border-white/10">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
                                                        <Briefcase className="w-5 h-5 text-neutral-900" />
                                                    </div>
                                                    <div>
                                                        <div className="h-3 w-32 bg-white/20 rounded-full"></div>
                                                        <div className="h-2 w-20 bg-white/10 rounded-full mt-2"></div>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                                    <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
                                                    <div className="h-2 w-4/6 bg-white/10 rounded-full"></div>
                                                </div>
                                                <div className="mt-4 flex justify-end">
                                                    <div className="h-6 w-20 bg-lime-400/20 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FeatureCard>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="h-full flex"
                            >
                                <FeatureCard
                                    title="Real-time Job Alerts"
                                    description="Get notified instantly when new opportunities matching your criteria become available"
                                    className="md:col-span-2 lg:col-span-1 group transition duration-500 flex-grow"
                                >
                                    <div className="aspect-video flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute -top-4 -right-4 bg-orange-500/20 p-3 rounded-full animate-ping opacity-75">
                                                <Bell className="w-6 h-6 text-orange-400" />
                                            </div>
                                            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-5 rounded-xl border border-white/10 shadow-lg">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <Bell className="w-5 h-5 text-lime-400" />
                                                    <p className="text-white font-medium">New Job Alert</p>
                                                </div>
                                                <p className="text-white/70 text-sm">Senior Developer position at <span className="text-lime-400">Google</span> matches your profile</p>
                                                <div className="mt-3 flex justify-between items-center">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3 text-white/50" />
                                                        <span className="text-white/50 text-xs">Just now</span>
                                                    </div>
                                                    <div className="text-xs bg-lime-400/20 text-lime-400 px-2 py-1 rounded-full">
                                                        View Job
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FeatureCard>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="h-full flex"
                            >
                                <FeatureCard
                                    title="Quick Search Commands"
                                    description="Find the perfect job faster with powerful keyboard shortcuts"
                                    className="group md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto flex-grow"
                                >
                                    <div className="aspect-video flex justify-center items-center gap-4">
                                        <Key className="w-28 outline outline-2 outline-transparent group-hover:outline-lime-400 transition-all duration-500 outline-offset-2 group-hover:translate-y-1">
                                            ctrl
                                        </Key>
                                        <Key className="outline outline-2 outline-transparent group-hover:outline-lime-400 transition-all duration-500 outline-offset-2 group-hover:translate-y-1 delay-150">
                                            K
                                        </Key>
                                        <div className="ml-4 text-white/50 group-hover:text-lime-400 transition-all duration-500">
                                            <Search className="w-5 h-5" />
                                        </div>
                                    </div>
                                </FeatureCard>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="my-8 flex items-center justify-center flex-wrap gap-2 max-w-3xl mx-auto">
                        {features.map((feature) => (
                            <div
                                className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                                key={feature}
                            >
                                <span className="bg-lime-400 text-neutral-900 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                    &#10038;
                                </span>
                                <span className="font-medium md:text-lg">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Features;
