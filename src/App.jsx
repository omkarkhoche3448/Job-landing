import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

export default function Home() {
    return (
        <Router>
            <Navbar />
            <Routes> 
                <Route path="/" element={
                    <>
                        <Hero />
                        <Introduction />
                        <Features />
                        <HowItWorks />
                        <Integrations />
                        <FeatureHighlights />
                        <Team />
                        <Testimonials />
                        <Pricing />
                        <Faqs />
                        <CallToAction />
                    </>
                } />
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
