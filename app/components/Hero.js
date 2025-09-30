// app/components/Hero.js
"use client";
import { useEffect, useRef } from "react";

const Hero = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    const elements = statRefs.current.filter(Boolean);
    if (!elements.length) return;

    const animationDuration = 2000;
    const frameIds = new Map();

    const animateValue = (element, target) => {
      const numberEl = element.querySelector(".stat-number");
      if (!numberEl) return;

      let startTimestamp;
      const step = (ts) => {
        if (startTimestamp === undefined) startTimestamp = ts;
        const progress = Math.min((ts - startTimestamp) / animationDuration, 1);
        const current = Math.floor(progress * target);
        numberEl.textContent = current.toLocaleString();
        if (progress < 1) {
          frameIds.set(element, requestAnimationFrame(step));
        } else {
          numberEl.textContent = target.toLocaleString();
        }
      };
      frameIds.set(element, requestAnimationFrame(step));
    };

    const observers = elements.map((el) => {
      const target = Number(el.dataset.count ?? 0);
      if (!Number.isFinite(target) || target <= 0) {
        const numberEl = el.querySelector(".stat-number");
        if (numberEl) numberEl.textContent = target.toLocaleString();
        return null;
      }
      const ob = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              ob.unobserve(e.target);
              animateValue(e.target, target);
            }
          });
        },
        { threshold: 0.35 }
      );
      ob.observe(el);
      return ob;
    });

    return () => {
      observers.forEach((ob) => ob?.disconnect());
      frameIds.forEach((id) => cancelAnimationFrame(id));
      frameIds.clear();
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="neural-network-bg" />

      <div className="hero-container">
        {/* LEFT COLUMN: TEXT */}
        <div className="hero-content">
          <h1 className="hero-title" id="heroTitle">
            THINK.ACT.SAVE
          </h1>
          <p className="hero-subtitle">Energy Minds Power Solutions Private Limited</p>
          <p className="hero-tagline">Empowering Trade Through Technology</p>
          <p className="hero-description">
            Technology-integrated energy trading platform delivering comprehensive solutions with
            data-driven insights, real-time market intelligence, and strategic optimization for
            sustainable energy management.
          </p>
          <p className="hero-description">
            <em>We are now Pvt. Ltd from LLP</em>
          </p>

          <div className="hero-stats">
            <div className="stat-item" data-count="950" ref={(el) => (statRefs.current[0] = el)}>
              <span className="stat-number">0</span>
              <span className="stat-unit">MUs</span>
              <span className="stat-label">Power Traded Till date</span>
            </div>
            <div className="stat-item" data-count="5" ref={(el) => (statRefs.current[1] = el)}>
              <span className="stat-number">0</span>
              <span className="stat-unit">Years</span>
              <span className="stat-label">Market Experience</span>
            </div>
            <div className="stat-item" data-count="200" ref={(el) => (statRefs.current[2] = el)}>
              <span className="stat-number">0</span>
              <span className="stat-unit">MUs</span>
              <span className="stat-label">Green Energy Traded FY24-25</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#our-solutions" className="btn btn--primary btn--lg cyber-btn">
              <span className="btn-text">Discover Our Solutions</span>
              <div className="btn-glow"></div>
            </a>
            <a href="#contact" className="btn btn--outline btn--lg cyber-btn">
              <span className="btn-text">Start Trading</span>
              <div className="btn-glow"></div>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: ORB (sibling grid item) */}
        <div className="hero-visual">
          <div className="energy-orb">
            <div className="orb-core"></div>
            <div className="orb-ring ring-1"></div>
            <div className="orb-ring ring-2"></div>
            <div className="orb-ring ring-3"></div>
            <div className="energy-particles"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
