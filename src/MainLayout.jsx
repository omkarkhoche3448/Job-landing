import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./index.css";
import Grid from "./components/ui/Grid";

export default function MainLayout({ children }) {
    const lenisRef = useRef(null);
    const progressBarRef = useRef(null); // Ref for the progress bar

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.07, // Adjust this value for smoothness (lower = smoother)
        });
        lenisRef.current = lenis;

        // Update progress bar on scroll
        lenis.on('scroll', ({ scroll, limit }) => {
            if (progressBarRef.current) {
                const progress = scroll / limit;
                progressBarRef.current.style.transform = `scaleX(${progress})`;
            }
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Destroy Lenis instance
            lenisRef.current = null;
            // No need to explicitly remove the listener as it's tied to the destroyed instance
        };
    }, []);

    return (
        <div className="font-sans antialiased bg-neutral-950 text-white relative">
            {/* Progress Bar */}
            <div
                ref={progressBarRef}
                className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50" // Added z-50 to ensure it's on top
                style={{ transform: 'scaleX(0)' }} // Initial state
            />
            <Grid />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}