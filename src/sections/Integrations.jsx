import React, { useRef } from "react";
import Tag from "../components/Tag";
import linkedinIcon from "../assets/images/LinkedIn.png";
import indeedIcon from "../assets/images/Indeed.png";
import zipRecruiterIcon from "../assets/images/ZipRecruiter.jpeg";
import glassdoorIcon from "../assets/images/glassdoor.png";
import IntegrationColumn from "../components/IntegrationColumn";
import { useInView, motion } from "framer-motion";

const integrations = [
    {
        name: "LinkedIn",
        icon: linkedinIcon,
        description: "World's largest professional network for job opportunities.",
    },
    {
        name: "Indeed",
        icon: indeedIcon,
        description: "Leading job site connecting millions with employers globally.",
    },
    {
        name: "ZipRecruiter",
        icon: zipRecruiterIcon,
        description: "Smart job matching platform for seamless hiring.",
    },
    {
        name: "Glassdoor",
        icon: glassdoorIcon,
        description: "Find jobs with company reviews and salary insights.",
    },
];

function Integrations() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const firstColumn = integrations.slice(0, 2);
    const secondColumn = integrations.slice(2);

    return (
        <section className="py-20 lg:py-48 relative overflow-hidden" ref={containerRef}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 items-center lg:gap-12">
                        <div>
                            <div className="flex justify-start">
                                <Tag>Aggregate</Tag>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-medium mt-4 leading-tight">
                                Aggregating jobs from{" "}
                                <span className="text-lime-400">leading platforms</span>
                            </h2>

                            <p className="text-white/50 mt-4 text-base">
                                Handjobs pulls listings from top sites like LinkedIn, Indeed, and ZipRecruiter — bringing every opportunity into one unified search. No more jumping between job boards.
                            </p>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-3 lg:gap-5 lg:h-[600px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                                <IntegrationColumn 
                                    integrations={firstColumn} 
                                />
                                <IntegrationColumn
                                    integrations={secondColumn}
                                    reverse={true} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Integrations;
