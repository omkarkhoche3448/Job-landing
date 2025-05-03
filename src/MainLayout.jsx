import React, { useEffect, useRef, useMemo } from "react";
import Lenis from "@studio-freight/lenis";
import "./index.css";
import Grid from "./components/ui/Grid";

export default function MainLayout({ children }) {
    const lenisRef = useRef(null);
    const progressBarRef = useRef(null);

    // Memoize the scroll handler to prevent unnecessary re-renders
    const handleScroll = useMemo(() => {
        return ({ scroll, limit }) => {
            if (progressBarRef.current) {
                const progress = scroll / limit;
                progressBarRef.current.style.transform = `scaleX(${progress})`;
            }
        };
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.07,
            smoothWheel: true,
            smoothTouch: false, // Disable on touch devices for better performance
            touchMultiplier: 1.5,
        });
        lenisRef.current = lenis;

        // Update progress bar on scroll
        lenis.on('scroll', handleScroll);

        let rafId = null;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [handleScroll]);

    return (
        <div className="font-sans antialiased bg-neutral-950 text-white relative">
            {/* Progress Bar */}
            <div
                ref={progressBarRef}
                className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
                style={{ transform: "scaleX(0)" }}
            />
            <Grid />
            {children}
        </div>
    );
}