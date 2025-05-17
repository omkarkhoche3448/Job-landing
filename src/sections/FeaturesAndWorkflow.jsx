import React, { useState } from "react";
import Tag from "../components/Tag";
import {
    Search, Filter, Bell, FileText, Brain, BookmarkCheck,
    Database, FileSearch, Send, ArrowRight, ChevronRight
} from "lucide-react";
import platfromImg from "../assets/images/Platform.webp";

const FeatureCard = ({ title, description, icon, index }) => {
    return (
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-5 hover:border-lime-400/30 transition-all duration-300 w-full group">
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-lime-400 text-neutral-900 p-2.5 rounded-xl group-hover:rotate-3 transition-transform duration-300">
                    {icon}
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

const WorkflowStep = ({ title, description, icon, iconBg, index }) => {
    return (
        <div className="flex items-start relative">
            {index < 3 && (
                <div className="absolute top-11 left-6 h-20 border-l border-dashed border-white/10 -z-10"></div>
            )}
            
            <div className={`${iconBg} p-3 rounded-lg bg-gradient-to-br from-white/10 to-transparent shrink-0 relative z-10 border border-white/10`}>
                {icon}
            </div>

            <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-white/70 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

function FeaturesAndWorkflow() {
    const [activeTab, setActiveTab] = useState("features");

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
            title: "Saved Jobs",
            description: "Easily save job posts to view them later from your saved list.",
            icon: <BookmarkCheck size={24} />
        }
    ];

    const workflowSteps = [
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
            description: "View job details and apply through the original job platform via provided links.",
            icon: <Send className="w-8 h-8 text-cyan-500" />,
            iconBg: "bg-white/10",
        }
    ];

    const featuredFeatures = [
        "Unified Search", "AI Form Filler", "Real-time Alerts", "ML Recommendations", "Advanced Filters"
    ];

    return (
        <section className="py-8 md:py-12 lg:py-16 px-4 relative overflow-hidden" id="features-workflow">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>
            <div className="absolute top-20 right-10 w-32 md:w-64 h-32 md:h-64 bg-lime-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-lime-400/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative">
                {/* Header section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex justify-center">
                        <Tag>Platform</Tag>
                    </div>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mt-3 md:mt-4 max-w-2xl mx-auto leading-tight">
                        One powerful platform to <span className="text-lime-400">simplify your job search</span>
                    </h2>

                    <p className="text-white/50 mt-3 md:mt-4 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                        From unified search across top sites to AI-driven tools, our platform saves you time and boosts your chances all in one place.
                    </p>

                    {/* Tab navigation */}
                    <div className="flex justify-center mt-6 md:mt-8 space-x-1 md:space-x-2 border border-white/10 rounded-full p-1 bg-black/20 inline-flex">
                        <button
                            onClick={() => setActiveTab('features')}
                            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${activeTab === 'features' ? 'bg-lime-400 text-black' : 'text-white/70 hover:text-white'}`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => setActiveTab('workflow')}
                            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${activeTab === 'workflow' ? 'bg-lime-400 text-black' : 'text-white/70 hover:text-white'}`}
                        >
                            How It Works
                        </button>
                    </div>
                </div>

                {/* Featured highlights */}
                <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-8 md:mb-12">
                    {featuredFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900/50 border border-white/10 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm inline-flex items-center gap-1.5 md:gap-2 hover:border-lime-400/30 transition-all duration-300 group"
                        >
                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-lime-400 group-hover:scale-125 transition-transform"></div>
                            {feature}
                        </div>
                    ))}
                </div>

                {/* Content based on active tab */}
                {activeTab === 'features' ? (
                    <>
                        {/* Feature grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                    index={index}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        {/* How it works section */}
                        <div className="mb-8 md:mb-12 bg-neutral-900/80 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 backdrop-blur-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-lime-400/20 text-lime-400 text-xs md:text-sm mb-3 md:mb-4">
                                        <Database size={14} className="md:w-4 md:h-4" />
                                        <span>Our Process</span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Simplifying Your Job Search</h3>

                                    <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base">
                                        Our platform works tirelessly behind the scenes to bring you the best opportunities with minimal effort on your part.
                                    </p>

                                    <div className="space-y-6 md:space-y-8">
                                        {workflowSteps.map((step, index) => (
                                            <WorkflowStep
                                                key={index}
                                                title={step.title}
                                                description={step.description}
                                                icon={React.cloneElement(step.icon, { 
                                                    className: `w-6 h-6 md:w-8 md:h-8 ${step.icon.props.className.split(' ').filter(c => c.includes('text-')).join(' ')}` 
                                                })}
                                                iconBg={step.iconBg}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="relative mt-6 md:mt-0 hidden lg:block md:block">
                                    <img
                                        src={platfromImg}
                                        alt="Workflow Diagram"
                                        className="w-full h-full rounded-xl md:rounded-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default FeaturesAndWorkflow;