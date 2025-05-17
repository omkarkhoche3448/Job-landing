import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Disable native scroll restoration
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Reset scroll position on page load
window.addEventListener('load', () => {
    const lenis = window.lenis;
    if (lenis) {
        lenis.scrollTo(0, { immediate: true });
    } else {
        window.scrollTo(0, 0);
    }
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);