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
        // Scroll to top on route change
        window.scrollTo(0, 0);
        
        // Handle scroll to section if coming from another route
        if (location.state && location.state.scrollTo) {
            const id = location.state.scrollTo.replace("#", "");
            
            // Use a slightly longer timeout to ensure the page has fully loaded
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        }
    }, [location]);

    return null;
}

// Add IDs to each section for proper scrolling
function HomeLayout() {
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
