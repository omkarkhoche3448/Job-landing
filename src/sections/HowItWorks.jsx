import React, { useRef } from "react";
import Tag from "../components/Tag";
import { Search, Database, FileSearch, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";

function HowItWorks() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const integrations = [
        {
            title: "Aggregate",
            description: "Our advanced web crawlers continuously scan top job platforms to collect the latest opportunities.",
            icon: <Database className="w-8 h-8 text-blue-500" />,
            iconBg: "bg-white/10",
        },
        {
            title: "Analyze",
            description: "We process and categorize job listings to ensure you get relevant, high-quality results.",
            icon: <FileSearch className="w-8 h-8 text-orange-500" />,
            iconBg: "bg-white/10",
        },
        {
            title: "Search",
            description: "Use our powerful search and filtering tools to find exactly what you're looking for.",
            icon: <Search className="w-8 h-8 text-green-500" />,
            iconBg: "bg-white/10",
        },
        {
            title: "Apply",
            description: "Apply directly through our platform or follow links to the original job posting.",
            icon: <Send className="w-8 h-8 text-cyan-500" />,
            iconBg: "bg-white/10",
        }
    ];

    return (
        <section className="py-16 px-4 relative overflow-hidden" id="how-it-works">
            <div className="max-w-5xl mx-auto relative" ref={containerRef}>
                {/* Header section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block">
                        <Tag>How It Works</Tag>
                    </div>
                    <h2 className="text-6xl font-medium mt-6">
                        Simplifying your {" "}
                        <span className="text-lime-400">job search</span>
                    </h2>
                    <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
                        Our platform works tirelessly behind the scenes to bring you the best opportunities with minimal effort.
                    </p>
                </motion.div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            className="/50 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:border-lime-400/30 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`${integration.iconBg} p-3 rounded-lg bg-gradient-to-br from-white/10 to-transparent shrink-0`}>
                                    {integration.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{integration.title}</h3>
                                    <p className="text-white/70 text-sm">
                                        {integration.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;