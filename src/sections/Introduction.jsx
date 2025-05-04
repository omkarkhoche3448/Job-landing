import React, { useEffect, useRef, useState } from "react";
import Tag from "../components/Tag";
import {
    useMotionValue,
    useTransform,
    useScroll,
    useInView,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
const text = `Job hunting shouldn't be this hard. Handjobs brings all opportunities to one place simple, fast, smart.`;
const words = text.split(" ");

function Introduction() {
    const sectionRef = useRef(null);
    const scrollTarget = useRef(null);
    const [currentWord, setCurrentWord] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const isInView = useInView(sectionRef, { amount: 0.3, once: false });

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end start"],
    });

    // Modified transform range for better bidirectional control
    const wordIndex = useTransform(scrollYProgress, [0, 0.6], [0, words.length]);

    useEffect(() => {
        let prevIndex = currentWord;
        
        const unsubscribe = wordIndex.on("change", (latest) => {
            // Calculate the new index based on scroll direction
            const newIndex = Math.min(Math.floor(latest), words.length - 1);
            
            // Update current word index
            setCurrentWord(newIndex);
            
            // Update completion state based on direction
            if (newIndex >= words.length - 1) {
                setIsComplete(true);
            } else if (newIndex < prevIndex) {
                // We're scrolling up, so update completion state
                setIsComplete(false);
            }
            
            prevIndex = newIndex;
        });
        
        return () => unsubscribe();
    }, [wordIndex]);

    return (
        <section ref={sectionRef} className="py-20 lg:py-48 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="container">
                <div className="sticky top-28 md:top-32">
                    <div className="flex justify-center">
                        <Tag>Introduction Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-12">
                        <span className="text-white/15">
                            {words.map((word, idx) => (
                                <span
                                    key={idx}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        idx <= currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400 block mt-4">
                            That's why we built Handjobs.
                        </span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[120vh]"></div>
            </div>
        </section>
    );
}

export default React.memo(Introduction);
