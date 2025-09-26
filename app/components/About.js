import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const About = () => {
    return (
        <section id="about" className="about-section">
        <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About EPSPL</h2>
                    <p className="section-subtitle">Redefining energy markets through technology-enabled power trading solutions</p>
            </div>
            <div className="about-grid">
                <div className="about-card glass-card" data-animation="slideUp">
                    <div className="card-glow"></div>
                    <div className="about-icon">🎯</div>
                    <h3>Our Mission</h3>
                    <p>To redefine energy markets through technology-empowered power trading—enabling smarter, greener, and more resilient energy ecosystems for a sustainable tomorrow.</p>
                </div>
                <div className="about-card glass-card" data-animation="slideUp">
                    <div className="card-glow"></div>
                    <div className="about-icon">👁️</div>
                    <h3>Our Vision</h3>
                    <p>To harness advanced real‑time data to deliver predictive, efficient, and sustainable power trading solutions—maximizing market opportunities with integrated dashboard solutions.</p>
                </div>
            </div>
            <div className="company-description">
                <div className="glass-card">
                    <p>Energy Minds Power Solutions Private Limited (EPSPL) is a forward-thinking technology-integrated energy trading platform aimed at delivering comprehensive energy management solutions at optimal cost using innovative strategies and data-driven insights.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;