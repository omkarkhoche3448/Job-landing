import React from "react";
import "./index.css";
import Grid from "./components/ui/Grid";

export default function MainLayout({ children }) {
    return (
        <div className="font-sans antialiased bg-neutral-950 text-white relative">
            <Grid />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}