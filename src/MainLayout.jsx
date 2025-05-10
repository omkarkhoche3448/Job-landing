import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Grid from "./components/ui/Grid";

export default function MainLayout({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Slightly longer duration for smoother effect
            easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother easing function
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            infinite: false,
        });

        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = null;
        };
    }, []);

    return (
        <div className="font-sans antialiased bg-neutral-950 text-white relative">
            <Grid />
            {children}
        </div>
    );
}