import React, { useEffect,useState  } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import ScrollToTopButton from "./components/ScrollToTopButton";
// import ScrollProgressBar from "./components/ScrollProgressBar";
// import SectionDots from "./components/SectionDots";
// import PageLoader from "./components/PageLoader";
// import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
// import KeyboardShortcutsHelp from "./components/KeyboardShortcutsHelp";

// Enhanced Page transition component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // On route change, always scroll to top first
    window.scrollTo(0, 0);
    
    // Then handle any hash navigation after a short delay
    if (location.hash || (location.state && location.state.scrollTo)) {
      const id = location.hash 
        ? location.hash.replace("#", "") 
        : location.state.scrollTo.replace("#", "");
        
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      }, 500); // Increased delay to ensure page is loaded
    }
  }, [location.pathname, location.hash, location.state]);

  return null;
}

// Add IDs to each section for proper scrolling
function HomeLayout() {
  // Define sections for navigation dots
  const sections = [
    { id: "hero", label: "Home" },
    { id: "introduction", label: "Introduction" },
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "integrations", label: "Integrations" },
    { id: "feature-highlights", label: "Highlights" },
    { id: "team", label: "Team" },
    { id: "testimonials", label: "Testimonials" },
    { id: "pricing", label: "Pricing" },
    { id: "faqs", label: "FAQs" },
    { id: "call-to-action", label: "Get Started" }
  ];

  // Use keyboard navigation
  // useKeyboardNavigation(sections);

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
      {/* <SectionDots sections={sections} /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section id="hero"><Hero /></section>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <section id="introduction"><Introduction /></section>
      </motion.div>
      
      {/* Apply similar animations to other sections */}
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

// AnimatedRoutes component to handle route transitions
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomeLayout />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <ContactUs />
          </PageTransition>
        } />
        <Route path="/privacy" element={
          <PageTransition>
            <PrivacyPolicy />
          </PageTransition>
        } />
        <Route path="/terms" element={
          <PageTransition>
            <TermsAndConditions />
          </PageTransition>
        } />
        <Route path="/refunds" element={
          <PageTransition>
            <Refunds />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <Router>
      <Navbar />
      <ScrollHandler />
      <AnimatedRoutes />
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}
