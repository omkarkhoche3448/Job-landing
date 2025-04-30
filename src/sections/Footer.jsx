import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { companyInfo, footerLinks, socialLinks } from "../components/footer/data/footerSectionData";
import siteLogo from "../assets/images/logo.svg";

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]);

    return (
        <footer className="text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Logo & About Section */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <img
                                src={siteLogo}
                                alt={companyInfo.name}
                                className="h-12 sm:h-16"
                            />
                        </div>
                        <p className="text-white/70 text-sm sm:text-base">
                            {companyInfo.slogan}
                            <br />
                            {companyInfo.subSlogan}
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-white/70 hover:text-lime-400 transition duration-200"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <svg
                                        className="h-5 w-5 sm:h-6 sm:w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        {/* Add corresponding SVG path here */}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-sm font-semibold text-white/70 tracking-wider uppercase">
                                    {section.title}
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.href.startsWith("#") ? (
                                                <a
                                                    href={link.href}
                                                    className="text-sm sm:text-base text-white/70 hover:text-lime-400 transition duration-200"
                                                >
                                                    {link.name}
                                                </a>
                                            ) : (
                                                <Link
                                                    to={link.href}
                                                    className="text-sm sm:text-base text-white/70 hover:text-lime-400 transition duration-200"
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Copyright Section */}
                <div className=" border-t border-white/20 pt-8 text-center">
                    <p className="text-sm sm:text-base text-white/70 text-start">
                        &copy; {new Date().getFullYear()} {companyInfo.copyright}. All
                        rights reserved.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-0">
                    {["H", "a", "d", "j", "o", "b", "s"].map((item, index, arr) => {
                        return (
                            <span
                                key={`item-${index}`}
                                className={`text-[4rem] md:text-[6rem] lg:text-[15rem] font-bold ${index + 1 <= arr.length / 2
                                    ? "hover:-rotate-12"
                                    : "hover:rotate-12"
                                    }  cursor-pointer transition-all duration-200 ease-out hover:bg-primary  hover:scale-110 bg-gradient-to-b from-black/20 dark:from-white/20 bg-clip-text text-transparent`}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
