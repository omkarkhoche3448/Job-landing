import React from "react";
import { twMerge } from "tailwind-merge";

const IntegrationColumn = (props) => {
    const { integrations, className, reverse } = props;
    
    return (
        <div className={twMerge("overflow-hidden h-full relative w-full", className)}>
            <div 
                className="flex flex-col gap-2 sm:gap-3 md:gap-5"
                style={{
                    animation: `${reverse ? 'scrollReverse' : 'scroll'} 25s linear infinite`,
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                }}
            >
                {[...integrations, ...integrations, ...integrations, ...integrations].map((integration, index) => (
                    <div
                        key={`${integration.name}-${index}`}
                        className="bg-neutral-900 border border-white/10 rounded-xl p-3 sm:p-4 md:p-5 transform transition-transform hover:scale-105"
                    >
                        <div className="flex justify-center">
                            <img
                                className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain"
                                src={integration.icon}
                                alt={`${integration.name}-icon`}
                                loading="lazy"
                            />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl text-center mt-2 sm:mt-3 md:mt-4">
                            {integration.name}
                        </h3>
                        <p className="text-center text-white/50 mt-1 sm:mt-1.5 md:mt-2 text-[10px] sm:text-xs md:text-sm line-clamp-2">
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
