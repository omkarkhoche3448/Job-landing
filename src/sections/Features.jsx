import React from "react";
import FeatureCard from "../components/FeatureCard";
import Tag from "../components/Tag";
import { Search, Filter, Bell, Briefcase, Clock, Zap, Target } from "lucide-react";
import Key from "../components/Key";

    const features = [
        "AI extension",
        "Smart Filters",
        "Job Alerts",
        "Resume Builder",
        "Salary Insights",
        "ML Powered Job Matching",
        "Quick Search Commands",
    ];

function Features() {
    return (
        <section id="features" className="py-16 relative overflow-hidden">
            <div>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex justify-center">
                        <Tag>Features</Tag>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-medium text-center mt-4 max-w-2xl mx-auto leading-tight">
                        Tools for your <span className="text-lime-400">career journey</span>
                    </h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="h-full flex">
                            <FeatureCard
                                title="Smart Job Matching"
                                description="Our AI analyzes your skills and preferences to find the perfect job matches"
                                className="flex-grow hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300"
                            >
                                <div className="aspect-video flex items-center justify-center p-2">
                                    <div className="relative w-full max-w-[260px] max-h-[180px]">
                                        <div className="absolute -top-4 -left-4 bg-blue-500/20 p-3 rounded-full animate-pulse">
                                            <Target className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div className="bg-neutral-800 p-4 rounded-xl border border-white/10 hover:border-lime-400/30 transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
                                                    <Briefcase className="w-4 h-4 text-neutral-900" />
                                                </div>
                                                <div>
                                                    <div className="h-2.5 w-28 bg-white/20 rounded-full"></div>
                                                    <div className="h-1.5 w-16 bg-white/10 rounded-full mt-1.5"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                                                <div className="h-1.5 w-5/6 bg-white/10 rounded-full"></div>
                                                <div className="h-1.5 w-4/6 bg-white/10 rounded-full"></div>
                                            </div>
                                            <div className="mt-3 flex justify-end">
                                                <div className="h-5 w-16 bg-lime-400/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FeatureCard>
                        </div>

                        <div className="h-full flex">
                            <FeatureCard
                                title="Real-time Job Alerts"
                                description="Get notified instantly when new opportunities matching your criteria become available"
                                className="group transition duration-500 flex-grow hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300"
                            >
                                <div className="aspect-video flex items-center justify-center p-2">
                                    <div className="relative w-full max-w-[260px] max-h-[180px]">
                                        <div className="absolute -top-4 -left-4 bg-blue-500/20 p-3 rounded-full animate-pulse">
                                            <Target className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div className="bg-neutral-800 p-4 rounded-xl border border-white/10 hover:border-lime-400/30 transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
                                                    <Briefcase className="w-4 h-4 text-neutral-900" />
                                                </div>
                                                <div>
                                                    <div className="h-2.5 w-28 bg-white/20 rounded-full"></div>
                                                    <div className="h-1.5 w-16 bg-white/10 rounded-full mt-1.5"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                                                <div className="h-1.5 w-5/6 bg-white/10 rounded-full"></div>
                                                <div className="h-1.5 w-4/6 bg-white/10 rounded-full"></div>
                                            </div>
                                            <div className="mt-3 flex justify-end">
                                                <div className="h-5 w-16 bg-lime-400/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FeatureCard>
                        </div>

                        <div className="h-full flex">
                            <FeatureCard
                                title="Quick Search Commands"
                                description="Find the perfect job faster with powerful keyboard shortcuts"
                                className="group flex-grow hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300"
                            >
                                <div className="aspect-video flex justify-center items-center gap-4 p-2">
                                    <Key className="w-24 outline-2 outline-transparent group-hover:outline-lime-400 transition-all duration-500 outline-offset-2 group-hover:translate-y-1">
                                        ctrl
                                    </Key>
                                    <span className="text-white/50 group-hover:text-lime-400 transition-all duration-300">+</span>
                                    <Key className="outline-2 outline-transparent group-hover:outline-lime-400 transition-all duration-500 outline-offset-2 group-hover:translate-y-1 delay-150">
                                        K
                                    </Key>
                                    <div className="ml-4 text-white/50 group-hover:text-lime-400 transition-all duration-500">
                                        <Search className="w-5 h-5" />
                                    </div>
                                </div>
                            </FeatureCard>
                        </div>
                    </div>

                    <div className="my-8 sm:my-12 flex items-center justify-center flex-wrap gap-2 sm:gap-3 max-w-3xl mx-auto px-3 sm:px-4">
                        <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                            {features.map((feature) => (
                                <div
                                    className="bg-neutral-900 border border-white/10 inline-flex px-2.5 sm:px-3 md:px-5 py-1.5 md:py-2 rounded-xl sm:rounded-2xl gap-2 sm:gap-3 items-center hover:scale-105 hover:border-lime-400/30 transition duration-500 group"
                                    key={feature}
                                >
                                    <span className="bg-lime-400 text-neutral-900 w-4 h-4 sm:w-5 sm:h-5 rounded-full inline-flex items-center justify-center text-base sm:text-xl group-hover:rotate-45 transition duration-500">
                                        &#10038;
                                    </span>
                                    <span className="font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
