import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import CallToAction from "./sections/CallToAction";
import Faqs from "./sections/Faqs";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Integrations from "./sections/Integrations";
import Introduction from "./sections/Introduction";
import LogoTicker from "./sections/LogoTicker";
import Navbar from "./sections/Navbar";
import { FeatureHighlights } from "./sections/FeatureHighlight";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Team from "./sections/Team";
import ContactUs from "./components/footer/ContactUs";
import PrivacyPolicy from "./components/footer/PrivacyPolicy"; 
import TermsAndConditions from "./components/footer/TermsAndConditions";
import Refunds from "./components/footer/Refunds";
import NotFound from "./components/NotFound";

function ScrollHandler() {
    const location = useLocation();

    useEffect(() => {
        // On route change, scroll to top by default
        if (!location.hash && !location.state?.scrollTo) {
            window.scrollTo(0, 0);
        }
        
        // Handle scroll to section if coming from another route
        if (location.state && location.state.scrollTo) {
            const id = location.state.scrollTo.replace("#", "");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    // Add offset to account for fixed navbar height
                    const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
                    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        } else if (location.hash) {
            // Handle direct hash links in URL
            const id = location.hash.replace("#", "");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    // Add offset to account for fixed navbar height
                    const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
                    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }, [location]);

    return null;
}

// Add IDs to each section for proper scrolling
function HomeLayout() {
    useEffect(() => {
        // Force scroll to top on component mount
        window.scrollTo(0, 0);
        
        // Set up beforeunload event to save scroll position
        const handleBeforeUnload = () => {
            localStorage.setItem('pageIsRefreshing', 'true');
        };
        
        window.addEventListener('beforeunload', handleBeforeUnload);
        
        // Check if this is a page refresh
        if (localStorage.getItem('pageIsRefreshing') === 'true') {
            localStorage.removeItem('pageIsRefreshing');
            window.scrollTo(0, 0);
            
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 50);
        }
        
        // Handle hash in URL on initial load
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
                    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
        
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <>
            <section id="hero"><Hero /></section>
            <section id="introduction"><Introduction /></section>
            <section id="features"><Features /></section>
            <section id="how-it-works"><HowItWorks /></section>
            <section id="integrations"><Integrations /></section>
            <section id="feature-highlights"><FeatureHighlights /></section>
            <section id="team"><Team /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="pricing"><Pricing /></section>
            <section id="faqs"><Faqs /></section>
            <section id="call-to-action"><CallToAction /></section>
        </>
    );
}

export default function Home() {
  return (
    <Router>
      <Navbar />
      <ScrollHandler />
      <Routes> 
        <Route path="/" element={<HomeLayout />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}
