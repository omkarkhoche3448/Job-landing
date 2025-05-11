import React from "react";
import { twMerge } from "tailwind-merge";

const IntegrationColumn = (props) => {
    const { integrations, className, reverse } = props;
    
    return (
        <div className={twMerge("overflow-hidden h-full relative", className)}>
            <div 
                className="flex flex-col gap-5"
                style={{
                    animation: `${reverse ? 'scrollReverse' : 'scroll'} 25s linear infinite`,
                    transform: 'translateZ(0)', // Force hardware acceleration
                    willChange: 'transform',
                }}
            >
                {/* Repeat content multiple times for seamless looping */}
                {[...integrations, ...integrations, ...integrations, ...integrations].map((integration, index) => (
                    <div
                        key={`${integration.name}-${index}`}
                        className="bg-neutral-900 border border-white/10 rounded-xl p-5"
                    >
                        <div className="flex justify-center">
                            <img
                                className="w-20 h-20 object-contain"
                                src={integration.icon}
                                alt={`${integration.name}-icon`}
                                loading="lazy"
                            />
                        </div>
                        <h3 className="text-xl text-center mt-4">
                            {integration.name}
                        </h3>
                        <p className="text-center text-white/50 mt-2 text-sm">
                            {integration.description}
                        </p>
                    </div>
                ))}
            </div>
            
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(calc(-100% / 4)); }
                }
                
                @keyframes scrollReverse {
                    0% { transform: translateY(calc(-100% / 4)); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default React.memo(IntegrationColumn);
