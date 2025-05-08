import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId;
        const toggleVisibility = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                setIsVisible(scrollY > 400);
            }, 150); // Debounce delay
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToTop = () => {
        const lenis = window.lenis;
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 1.5, // Match the duration with Lenis configuration
                easing: (t) => 1 - Math.pow(1 - t, 4) // Use the same easing function
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-[9999] p-3 rounded-2xl bg-black/80 backdrop-blur-sm border border-lime-500/20 shadow-lg hover:shadow-lime-500/10 transition-all duration-300 focus:outline-none cursor-pointer hover:bg-black/90"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronsUp className="text-lime-400 w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;