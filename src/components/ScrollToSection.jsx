import { useNavigate, useLocation } from "react-router-dom";

export default function ScrollToSection({ to, children, className, onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    
    // Call additional onClick handler if provided (for mobile menu closing)
    if (onClick) onClick();

    if (location.pathname !== "/") {
      // Navigate to home with scroll target
      navigate("/", { state: { scrollTo: to } });
    } else {
      // Already on home, just scroll
      const id = to.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element not found, it might be because the section is not yet loaded
        // Set a small timeout to try again
        setTimeout(() => {
          const retryEl = document.getElementById(id);
          if (retryEl) {
            retryEl.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}