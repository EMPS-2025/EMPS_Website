"use client";

import { useEffect, useRef } from "react";

const Hero = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    const elements = statRefs.current.filter(Boolean);
    if (!elements.length) return;

    const duration = 2000;
    const frameIds = new Map();

    const animateValue = (element, target) => {
      const numberEl = element.querySelector(".stat-number");
      if (!numberEl) return;

      let startTime;
      const step = (timestamp) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        numberEl.textContent = current.toLocaleString();
        if (progress < 1) {
          frameIds.set(element, requestAnimationFrame(step));
        } else {
          numberEl.textContent = target.toLocaleString();
          frameIds.delete(element);
        }
      };
      frameIds.set(element, requestAnimationFrame(step));
    };

    const observers = elements.map((element) => {
      const target = Number(element.dataset.count ?? 0);
      if (!Number.isFinite(target) || target <= 0) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
              animateValue(entry.target, target);
            }
          });
        },
        { threshold: 0.4 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((obs, i) => {
        if (obs) {
          const el = elements[i];
          obs.unobserve(el);
          obs.disconnect();
        }
      });
      frameIds.forEach((id) => cancelAnimationFrame(id));
      frameIds.clear();
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* LEFT: Text + stats */}
        <div className="hero-left">
          <h1 className="hero-title">THINK.ACT.SAVE</h1>
          <p className="hero-subtitle">Energy Minds Power Solutions Private Limited</p>
          <p className="hero-description">
            Technology-integrated energy trading platform delivering comprehensive
            solutions with data-driven insights, real-time market intelligence, and
            strategic optimization for sustainable energy management.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div
              className="stat-item"
              data-count="950"
              ref={(el) => (statRefs.current[0] = el)}
            >
              <span className="stat-number">0</span>
              <span className="stat-unit">MUs</span>
              <span className="stat-label">Power Traded Till Date</span>
            </div>
            <div
              className="stat-item"
              data-count="5"
              ref={(el) => (statRefs.current[1] = el)}
            >
              <span className="stat-number">0</span>
              <span className="stat-unit">Years</span>
              <span className="stat-label">Market Experience</span>
            </div>
            <div
              className="stat-item"
              data-count="200"
              ref={(el) => (statRefs.current[2] = el)}
            >
              <span className="stat-number">0</span>
              <span className="stat-unit">MUs</span>
              <span className="stat-label">Green Energy Traded FY24-25</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#services" className="btn btn--primary">Discover Our Solutions</a>
            <a href="#contact" className="btn btn--outline">Start Trading</a>
          </div>
        </div>

        {/* RIGHT: Slideshow */}
        <div className="hero-right">
          <div className="hero-slideshow">
            <div className="slide" style={{ backgroundImage: "url('/hero1.png')" }}></div>
            <div className="slide" style={{ backgroundImage: "url('/hero2.png')" }}></div>
            <div className="slide" style={{ backgroundImage: "url('/hero3.png')" }}></div>
            <div className="slide" style={{ backgroundImage: "url('/hero4.png')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
