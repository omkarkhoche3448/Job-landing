import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Grid from "./components/ui/Grid";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function MainLayout() {
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => 1 - Math.pow(1 - t, 4), 
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

        // Handle scroll to top on route change
        window.scrollTo(0, 0);

        // Handle hash navigation
        if (location.hash || (location.state && location.state.scrollTo)) {
            const id = location.hash 
                ? location.hash.replace("#", "") 
                : location.state.scrollTo.replace("#", "");
            
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
                    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                    lenis.scrollTo(elementPosition - navbarHeight, { immediate: false });
                }
            }, 300);
        }

        return () => {
            lenis.destroy();
            window.lenis = null;
        };
    }, [location]);

    return (
        <>
            <div className="font-sans antialiased bg-neutral-950 text-white relative">
                <Navbar />
                <Grid />
                <Outlet />
                <Footer />
            </div>
            <ScrollToTopButton />
        </>
    );
}