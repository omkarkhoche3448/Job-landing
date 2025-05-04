import React, { useEffect, useRef, useState } from "react";
import Tag from "../components/Tag";
import {
    useMotionValue,
    useTransform,
    useScroll,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
const text = `Job hunting shouldn't be this hard. Handjobs brings all opportunities to one place simple, fast, smart.`;
const words = text.split(" ");

function Introduction() {
    const scrollTarget = useRef(null);
    const [currentWord, setCurrentWord] = useState(0);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        const unsubscribe = wordIndex.on("change", (latest) => {
            setCurrentWord(Math.min(Math.floor(latest), words.length - 1));
        });
        
        return () => unsubscribe();
    }, [wordIndex]);

    return (
        <section className="py-20 lg:py-48 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="container">
                <div className="sticky top-28 md:top-32">
                    <div className="flex justify-center">
                        <Tag>Introduction Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-12">
                        <span className="text-white/15">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400 block mt-4">
                            That's why we built Handjobs.
                        </span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[150vh]"></div>
            </div>
        </section>
    );
}

export default React.memo(Introduction);
