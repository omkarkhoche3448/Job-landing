import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Clock } from "lucide-react";

function FeatureHighlight({ title, description, icon }) {
    return (
        <motion.div 
            className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300 w-full"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-4 mb-4">
                {icon && (
                    <div className="bg-lime-400 text-neutral-900 p-3 rounded-xl">
                        {icon}
                    </div>
                )}
                <h3 className="text-xl font-medium">{title}</h3>
            </div>
            <p className="text-white/50">{description}</p>
        </motion.div>
    );
}

export function FeatureHighlights() {
    const features = [
        {
            title: "Lightning Fast",
            description: "Experience unparalleled speed with our optimized platform.",
            icon: <Zap size={24} />
        },
        {
            title: "Secure by Design",
            description: "Your data is protected with enterprise-grade security.",
            icon: <Shield size={24} />
        },
        {
            title: "Time-Saving",
            description: "Automate repetitive tasks and focus on what matters.",
            icon: <Clock size={24} />
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <FeatureHighlight
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeatureHighlight;