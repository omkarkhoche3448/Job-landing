import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

function CallToAction() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const animation = useRef(null);
    const [scope, animate] = useAnimate();
    const [slowDownAnimation, setSlowDownAnimation] = useState(false);

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, []); 

    useEffect(() => {
        if (animation.current) {
            if (slowDownAnimation) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [slowDownAnimation]);

    return (
        <section className="py-24" ref={containerRef}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="overflow-x-clip p-4 flex"
            >
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium"
                    onMouseEnter={() => setSlowDownAnimation(true)}
                    onMouseLeave={() => setSlowDownAnimation(false)}
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl ">
                                &#10038;
                            </span>
                            <span className={twMerge(slowDownAnimation && "text-lime-400")}>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default CallToAction;
