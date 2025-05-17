import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./MainLayout";
import HomeLayout from "./sections/HomeLayout"; 
import ContactUs from "./components/footer/ContactUs";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import TermsAndConditions from "./components/footer/TermsAndConditions";
import Refunds from "./components/footer/Refunds";
import NotFound from "./components/NotFound";

const PageTransition = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
);

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<PageTransition><HomeLayout /></PageTransition>} />
                    <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
                    <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
                    <Route path="/terms" element={<PageTransition><TermsAndConditions /></PageTransition>} />
                    <Route path="/refunds" element={<PageTransition><Refunds /></PageTransition>} />
                    <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                </Route>
            </Routes>
        </Router>
    );
}
