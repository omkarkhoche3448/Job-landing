import React from "react";
import "./index.css";

export default function MainLayout({ children }) {
    return (
        <div className="font-sans antialiased bg-neutral-950 text-white">
            {children}
        </div>
    );
}