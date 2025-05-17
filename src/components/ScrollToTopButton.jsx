import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let timeoutId;
        const toggleVisibility = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                const documentHeight = document.documentElement.scrollHeight;
                const viewportHeight = window.innerHeight;
                
                // Show button if:
                // 1. Scrolled more than 400px OR
                // 2. Scrolled more than 30% of viewport height OR
                // 3. Page is longer than 2 viewport heights and has been scrolled
                setIsVisible(
                    scrollY > 400 || 
                    scrollY > viewportHeight * 0.3 ||
                    (documentHeight > viewportHeight * 2 && scrollY > 100)
                );
            }, 100);
        };

        window.addEventListener("scroll", toggleVisibility);
        // Check visibility on route change and initial load
        toggleVisibility();
        
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [location.pathname]); // Re-run effect on route change

    const scrollToTop = () => {
        const lenis = window.lenis;
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 1.5,
                easing: (t) => 1 - Math.pow(1 - t, 4)
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-[99999] p-3 rounded-2xl bg-black/80 backdrop-blur-sm border border-lime-500/20 shadow-lg hover:shadow-lime-500/10 transition-all duration-300 focus:outline-none cursor-pointer hover:bg-black/90"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ position: 'fixed' }}
                >
                    <ChevronsUp className="text-lime-400 w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;