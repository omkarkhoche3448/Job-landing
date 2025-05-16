import React, { useState, useEffect } from "react";
import logoImage from "../assets/images/jobs.png";
import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import ScrollToSection from "../components/ScrollToSection";
import { Link } from "react-router-dom";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [showAuthButtons, setShowAuthButtons] = useState(false); // This is false by default
    const location = useLocation();

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== "/") {
                setActiveSection("");
                return;
            }

            const sections = navLinks
                .filter(link => link.href.startsWith("#"))
                .map(link => link.href.replace("#", ""));

            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (!element) continue;

                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection("#" + section);
                    return;
                }
            }

            // If we're at the top of the page, set Home as active
            if (scrollPosition < 300) {
                setActiveSection("/");
            }
        };

        // Set initial active section
        if (location.pathname === "/") {
            handleScroll();
        } else {
            setActiveSection("");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Reset active section when route changes
    useEffect(() => {
        const handleScroll = () => {
            // This runs on every scroll event without debouncing
            if (location.pathname !== "/") {
                setActiveSection("");
                return;
            }

            const sections = navLinks
                .filter(link => link.href.startsWith("#"))
                .map(link => link.href.replace("#", ""));

            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (!element) continue;

                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection("#" + section);
                    return;
                }
            }

            // If we're at the top of the page, set Home as active
            if (scrollPosition < 300) {
                setActiveSection("/");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="absolute inset-0 bg-gradient-to-b from-lime-400/10 via-transparent to-transparent"></div>

            <section className="relative py-4 lg:py-6">
                <div className="container max-w-5xl mx-auto">
                    <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur">
                        <figure className="grid grid-cols-2 lg:grid-cols-2 py-2 lg:px-2 px-4 items-center">
                            <NavLink to={"/"} onClick={scrollToTop}>
                                <img
                                    src={logoImage}
                                    alt="Handjobs logo"
                                    loading="lazy"
                                    className="h-8 w-auto sm:h-8 md:h-10 lg:h-11 ml-2"
                                    />
                            </NavLink>
                            <div className="hidden lg:flex justify-center items-center">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((each) => (
                                        each.href === "/" ? (
                                            <Link
                                                to="/"
                                                key={each.href}
                                                onClick={scrollToTop}
                                                className={`transition-colors duration-300 ${activeSection === each.href ? 'text-lime-400' : 'text-white hover:text-lime-300'}`}
                                            >
                                                {each.label}
                                            </Link>
                                        ) : (
                                            <ScrollToSection
                                                to={each.href}
                                                key={each.href}
                                                className={`transition-colors duration-300 ${activeSection === each.href ? 'text-lime-400' : 'text-white hover:text-lime-300'}`}
                                            >
                                                {each.label}
                                            </ScrollToSection>
                                        )
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="lg:hidden"
                                >
                                    {!isOpen ? (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            animate={{
                                                opacity: isOpen ? 0 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Menu
                                                className="text-white"
                                                size={30}
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: isOpen ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <X
                                                className="text-white"
                                                size={30}
                                            />
                                        </motion.div>
                                    )}
                                </button>
                                {showAuthButtons && ( // Conditionally render buttons
                                    <>
                                        <Button
                                            variant="secondary"
                                            className="hidden lg:inline-flex items-center cursor-pointer"
                                        >
                                            Login
                                        </Button>
                                        <Button
                                            variant="primary"
                                            className="hidden lg:inline-flex items-center cursor-pointer"
                                        >
                                            Signup
                                        </Button>
                                    </>
                                )}
                            </div>
                        </figure>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.figure
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden lg:hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4 border-t border-white/15 mt-2">
                                        {navLinks.map((link) => (
                                            link.href === "/" ? (
                                                <Link
                                                    key={link.href}
                                                    to="/"
                                                    className={`block w-full text-center py-2 transition-colors duration-300 ${activeSection === link.href ? 'text-lime-400' : 'text-white hover:text-lime-300'}`}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        scrollToTop();
                                                    }}
                                                >
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    className={`block w-full text-center py-2 transition-colors duration-300 ${activeSection === link.href ? 'text-lime-400' : 'text-white hover:text-lime-300'}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setIsOpen(false);
                                                        const sectionId = link.href.substring(1);
                                                        const element = document.getElementById(sectionId);
                                                        if (element) {
                                                            setTimeout(() => {
                                                                const yOffset = -80; 
                                                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                                window.scrollTo({top: y, behavior: 'smooth'});
                                                            }, 100);
                                                        }
                                                    }}
                                                >
                                                    {link.label}
                                                </a>
                                            )
                                        ))}

                                        {showAuthButtons && (
                                            <>
                                                <Button
                                                    className="w-fit mt-2 cursor-pointer"
                                                    variant="secondary"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Log In
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    className="w-fit mt-2 cursor-pointer"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Sign Up
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </motion.figure>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Navbar;