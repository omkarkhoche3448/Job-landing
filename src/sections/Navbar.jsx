import React, { useState, useEffect } from "react";
import logoImage from "../assets/images/logo.svg";
import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("/");

    useEffect(() => {
        const sections = navLinks
            .map(link => link.href.startsWith("#") ? document.getElementById(link.href.substring(1)) : null)
            .filter(section => section !== null);

        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -90% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            let currentActive;
            if (window.scrollY < 50) {
                currentActive = "/";
            } else {
                let highestIntersectingEntry = null;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!highestIntersectingEntry || entry.target.offsetTop < highestIntersectingEntry.target.offsetTop) {
                            highestIntersectingEntry = entry;
                        }
                    }
                });

                if (highestIntersectingEntry) {
                    currentActive = `#${highestIntersectingEntry.target.id}`;
                }
            }
            setActiveSection(prev => prev !== currentActive ? currentActive : prev);
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        let scrollTimeout;
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.scrollY < 50) {
                    setActiveSection("/");
                }
            }, 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        if (targetId === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection("/");
        } else {
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="absolute inset-0 bg-gradient-to-b from-lime-400/10 via-transparent to-transparent"></div>

            <section className="relative py-4 lg:py-6">
                <div className="container max-w-5xl mx-auto">
                    <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur">
                        <figure className="grid grid-cols-2 lg:grid-cols-3 py-2 lg:px-2 px-4 items-center">
                            <div>
                                <img
                                    src={logoImage}
                                    alt="layer logo"
                                    className="h-9 w-auto md:h-auto"
                                />
                            </div>
                            <div className="hidden lg:flex justify-center items-center">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((each) => (
                                        <a 
                                            href={each.href} 
                                            key={each.href}
                                            onClick={(e) => handleSmoothScroll(e, each.href)}
                                            className={`transition-colors duration-300 ${activeSection === each.href ? 'text-lime-400' : 'text-white hover:text-lime-300'}`}
                                        >
                                            {each.label}
                                        </a>
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
                                <Button
                                    variant="secondary"
                                    className="hidden lg:inline-flex items-center"
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="primary"
                                    className="hidden lg:inline-flex items-center"
                                >
                                    Signup
                                </Button>
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
                                            <a 
                                                key={link.href} 
                                                href={link.href}
                                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                                className={`block w-full text-center py-2 transition-colors duration-300 ${activeSection === link.href ? 'text-lime-400' : 'text-white hover:text-lime-300'}`}
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button
                                            className="w-3/4 mt-2"
                                            variant="secondary"
                                        >
                                            Log In
                                        </Button>
                                        <Button
                                            className="w-3/4"
                                            variant="primary"
                                        >
                                            Sign Up
                                        </Button>
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