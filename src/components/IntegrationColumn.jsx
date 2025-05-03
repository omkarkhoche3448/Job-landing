import React, { Fragment, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useAnimation } from "framer-motion";

const IntegrationColumn = (props) => {
    const { integrations, className, reverse } = props;
    const controls = useAnimation();
    const columnRef = useRef(null);
    
    useEffect(() => {
        // Only animate when the component is in viewport
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Start animation when visible
                    controls.start({
                        y: reverse ? 0 : "-50%",
                        transition: {
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }
                    });
                } else {
                    // Pause animation when not visible
                    controls.stop();
                }
            },
            { threshold: 0.1 }
        );
        
        if (columnRef.current) {
            observer.observe(columnRef.current);
        }
        
        return () => {
            if (columnRef.current) {
                observer.unobserve(columnRef.current);
            }
        };
    }, [controls, reverse]);

    return (
        <motion.div
            ref={columnRef}
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={controls}
            className={twMerge("flex flex-col gap-5 pb-4 will-change-transform", className)}
            style={{
                transform: `translateZ(0)`, // Force GPU acceleration
                backfaceVisibility: "hidden", // Reduce paint complexity
            }}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="bg-neutral-900 border border-white/10 rounded-xl p-5"
                        >
                            <div className="flex justify-center">
                                <img
                                    className="w-20 h-20"
                                    src={integration.icon}
                                    alt={`${integration.name}-icon`}
                                    loading="lazy" // Lazy load images
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
                </Fragment>
            ))}
        </motion.div>
    );
};

export default React.memo(IntegrationColumn);
