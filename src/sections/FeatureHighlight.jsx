import React from "react";
import Tag from "../components/Tag";
import { Search, Filter, Bell, FileText, Brain, BookmarkCheck } from "lucide-react";

function FeatureHighlight({ title, description, icon }) {
    return (
        <div
            className="bg-neutral-900 border border-white/10 rounded-2xl p-5 hover:border-lime-400/30 transition-all duration-300 w-full"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3 mb-3">
                {icon && (
                    <div className="bg-lime-400 text-neutral-900 p-2.5 rounded-xl">
                        {icon}
                    </div>
                )}
                <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

export function FeatureHighlights() {
    const features = [
        {
            title: "Unified Job Search",
            description: "Search across LinkedIn, Indeed, Ziprecruiter, and more with a single query. No more jumping between tabs.",
            icon: <Search size={24} />
        },
        {
            title: "Advanced Filtering",
            description: "Filter by location, experience level, company, and more. Find exactly what you're looking for in seconds.",
            icon: <Filter size={24} />
        },
        {
            title: "Real-time Updates",
            description: "Get notified about new opportunities that match your criteria as soon as they're posted.",
            icon: <Bell size={24} />
        },
        {
            title: "AI-Based Automated Form Filler",
            description: "Apply to jobs effortlessly with our AI-powered form filler that completes applications for you.",
            icon: <FileText size={24} />
        },
        {
            title: "ML-Based Job Recommendations",
            description: "Receive personalized job recommendations tailored to your resume and preferences using machine learning.",
            icon: <Brain size={24} />
        },
        {
            title: "Saved Searches",
            description: "Save your search criteria and receive alerts when new matching opportunities are available.",
            icon: <BookmarkCheck size={24} />
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-center">
                <Tag>Features</Tag>
            </div>

            <div className="text-center mt-4 mb-12">
                <h2 className="text-4xl lg:text-5xl font-medium max-w-2xl mx-auto leading-tight">
                    Everything you need to{" "}
                    <span className="text-lime-400">find your dream job</span>
                </h2>
                <p className="text-white/50 mt-4 text-base max-w-2xl mx-auto">
                    Handjobs brings all job opportunities to one place, saving you time and helping you find the perfect match.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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