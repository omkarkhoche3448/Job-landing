import React from "react";
import siteLogo from "../assets/images/logo.svg";

const footerLinks = [
    { href: "#contact", label: "Contact" },
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms & Conditions" },
];

function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                    <div>
                        <img src={siteLogo} alt="Layers Logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/50 text-sm "
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
