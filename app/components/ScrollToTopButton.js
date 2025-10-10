"use client";
import { useEffect } from "react";

export default function ScrollToTopButton() {
  useEffect(() => {
    const btn = document.getElementById("scrollToTopBtn");
    const toggleVisibility = () => {
      if (window.scrollY > 300) btn.classList.add("visible");
      else btn.classList.remove("visible");
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      className="scroll-to-top-btn"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
