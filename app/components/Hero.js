import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="neural-network-bg"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title" id="heroTitle">THINK.ACT.SAVE</h1>
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
            <div className="stat-item" data-count="950">
              <span className="stat-number">0</span>
              <span className="stat-unit">MUs</span>
              <span className="stat-label">Power Traded Till date</span>
            </div>
            <div className="stat-item" data-count="5">
              <span className="stat-number">0</span>
              <span className="stat-unit">Years</span>
              <span className="stat-label">Market Experience</span>
            </div>
            <div className="stat-item" data-count="200">
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