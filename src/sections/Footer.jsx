import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { companyInfo, footerLinks, socialLinks } from "../components/footer/data/footerSectionData";
import siteLogo from "../assets/images/jobs.webp";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (href) => {
        if (href.startsWith("#")) {
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: href } });
            } else {
                const id = href.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        } else {
            navigate(href);
            window.scrollTo(0, 0);
        }
    };

    return (
        <footer className="text-white relative mt-16">
            {/* Bottom Glow Effect */}
            <div
                className="
                    absolute inset-x-0 bottom-0 h-40
                    bg-gradient-to-t
                    from-lime-400/10
                    sm:h-80 sm:from-lime-400/20
                    via-transparent to-transparent
                    pointer-events-none
                "
            ></div>

            <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10 relative z-10">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Logo & About Section */}
                    <div className="space-y-8">
                        <NavLink to={"/"} className="flex items-center">
                            <img
                                src={siteLogo}
                                alt={companyInfo.name}
                                loading="lazy"
                                className="h-10 md:h-12 w-auto"
                                />
                        </NavLink>
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
                            {companyInfo.slogan}
                            <br className="hidden sm:block" />
                            {companyInfo.subSlogan}
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-white/70 hover:text-lime-400 transition duration-200 p-2 hover:bg-white/5 rounded-full"
                                    aria-label={social.name}
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
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 md:pl-8">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-sm font-semibold text-white/80 tracking-wider uppercase mb-5">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleLinkClick(link.href);
                                                }}
                                                className="text-sm sm:text-base text-white/70 hover:text-lime-400 transition-all duration-200 hover:translate-x-1 inline-block"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/20 mt-16 pt-8">
                    <p className="text-sm sm:text-base text-white/60 text-start">
                        &copy; {new Date().getFullYear()} {companyInfo.copyright}. All
                        rights reserved.
                    </p>
                </div>

                {/* Brand Name */}
                <div className="flex items-center justify-center gap-0 mt-12 mb-4 overflow-hidden w-full">
                    {["H", "a", "n", "d", "j", "o", "b", "s"].map((item, index, arr) => {
                        return (
                            <span
                                key={`item-${index}`}
                                className={`text-[4rem] md:text-[7rem] lg:text-[15rem] font-bold 
                                    ${index + 1 <= arr.length / 2 ? "hover:-rotate-12" : "hover:rotate-12"} 
                                    cursor-pointer transition-all duration-300 ease-out 
                                    hover:text-lime-400 hover:scale-110 
                                    bg-gradient-to-b from-white/30 dark:from-white/30 
                                    to-transparent bg-clip-text text-transparent`}
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
