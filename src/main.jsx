import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MainLayout from "./MainLayout.jsx";
import "./index.css";

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

window.onload = function() {
  window.scrollTo(0, 0);
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MainLayout>
            <App />
        </MainLayout>
    </StrictMode>
);
